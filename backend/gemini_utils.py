import google.generativeai as genai
from config import Config

# Configure the Gemini API
genai.configure(api_key=Config.GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def get_ai_response(notes_content, user_query):
    try:
        # Initialize chat with context and personality
        chat = model.start_chat(history=[])
        
        # Set up initial context and personality
        system_prompt = """
        You are an AI Study Assistant, friendly and helpful. Your name is StudyBuddy.
        If someone asks who you are, introduce yourself as StudyBuddy.
        If a question seems unclear, ask for clarification.
        If someone greets you, respond warmly and offer to help with their studies.
        """
        
        # Send system prompt
        chat.send_message(system_prompt)
        
        # Add notes context if available
        if notes_content:
            context_prompt = f"Reference these notes for relevant questions: {notes_content}"
            chat.send_message(context_prompt)
        
        # Handle common queries
        if user_query.lower().strip() in ['hi', 'hello', 'hey']:
            return "Hi! I'm StudyBuddy, your AI study assistant. How can I help you with your studies today?"
        
        if 'who are you' in user_query.lower():
            return "I'm StudyBuddy, your AI-powered study assistant! I'm here to help you understand your study materials, answer questions, and generate quizzes. What would you like help with?"
        
        # Send user query and get response
        response = chat.send_message(user_query)
        
        if not response.text or response.text.strip() == "":
            return "I apologize, but I couldn't generate a proper response. Could you please rephrase your question?"
            
        return response.text

    except Exception as e:
        print(f"Error in get_ai_response: {e}")
        return "I apologize, but I encountered an error. Please try asking your question again."

def generate_quiz_from_notes(notes_content, difficulty):
    prompt = f"""
    Generate a {difficulty}-level quiz based on these notes. For each question, provide:
    - Question
    - 5 answer options (A through E)
    - The correct answer
    Format each question exactly like this:
    Question: What is 2 + 2?
    Options: A) 3, B) 4, C) 5, D) 6, E) 7
    Correct Answer: B) 4

    Notes content: {notes_content}
    Generate 5 questions following this exact format.
    """
    
    try:
        response = model.generate_content(prompt)
        return parse_quiz_response(response.text)
    except Exception as e:
        print(f"Error generating quiz: {e}")
        return []

def parse_quiz_response(response_content):
    questions = []
    current_question = {}
    
    for line in response_content.split('\n'):
        line = line.strip()
        if not line:
            continue
            
        if line.startswith('Question:'):
            if current_question:
                questions.append(current_question)
                current_question = {}
            current_question['question'] = line[9:].strip()
            
        elif line.startswith('Options:'):
            options_text = line[8:].strip()
            options = [opt.strip() for opt in options_text.split(',')]
            current_question['options'] = options
            
        elif line.startswith('Correct Answer:'):
            current_question['correct_answer'] = line[15:].strip()
            
    if current_question:
        questions.append(current_question)
        
    return questions

# Function wrappers for different difficulty levels
def generate_easy_quiz_from_notes(notes_content):
    return generate_quiz_from_notes(notes_content, "easy")

def generate_medium_quiz_from_notes(notes_content):
    return generate_quiz_from_notes(notes_content, "medium")

def generate_hard_quiz_from_notes(notes_content):
    return generate_quiz_from_notes(notes_content, "hard")

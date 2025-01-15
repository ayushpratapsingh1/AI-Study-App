# AI Education Tool

An interactive AI-powered education platform that combines real-time chat capabilities with educational content delivery. This tool helps students learn through natural conversation with an AI tutor.

## 🌟 Features

- **Interactive AI Chat Interface**
  - Real-time conversation with AI tutor
  - Message history preservation
  - Copy/paste functionality
  - Model output transparency
  - Chat search capabilities
  - Conversation management (create, delete, search)

- **Educational Content Delivery**
  - Context-aware responses
  - Structured learning paths
  - Real-time feedback
  - Progress tracking

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - TailwindCSS
  - Lucide Icons
  - Axios

- **Backend:**
  - Python/Flask
  - AI/ML Models
  - SQLite/Database

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn
- pip

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushpratapsingh1/AI-Study-App.git
cd AI-Study-App
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### Running the Application

1. Start the backend server:
```bash
cd backend
python app.py
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 Configuration

### Frontend Configuration
- Update API endpoints in `.env` file
- Customize theme in `tailwind.config.js`

### Backend Configuration
- Configure AI model settings in `config.py`
- Set up database connections
- Update environment variables

## 📝 API Documentation

### Chat Endpoints

```
POST /chat_with_ai
{
  "query": "string",
  "class_id": "number"
}

Response:
{
  "response": "string",
  "confidence": "number",
  "context": "string",
  "model_name": "string",
  "processing_time": "number"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Built with React and TailwindCSS
- Powered by [Your AI Model Name]
- Icons by Lucide

## 📞 Contact
Project Link: [https://github.com/yourusername/ai-education-tool](https://github.com/ayushpratapsingh1/AI-Study-App)

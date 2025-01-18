import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import NavigationBar from "./NavigationBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    saveInfo: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const mapCenter = { lat: 40.7128, lng: -74.0060 }; // New York coordinates
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.5rem'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        saveInfo: false
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["support@aistudy.com", "info@aistudy.com"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 AI Avenue", "New York, NY 10001"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon-Fri: 9AM to 6PM", "Sat: 10AM to 2PM"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <>
      <NavigationBar />
      <Breadcrumb title="Contact Us" />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={14}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message*"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              ></textarea>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <label className="text-gray-600">Save my information for future correspondence</label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2
                  ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} transition-colors`}
              >
                {loading ? 'Sending...' : success ? 'Message Sent!' : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;

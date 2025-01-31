import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
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

  // Custom marker component using the new AdvancedMarkerElement
  const Marker = () => {
    const { AdvancedMarkerElement } = google.maps.marker;
    
    React.useEffect(() => {
      if (map) {
        new AdvancedMarkerElement({
          map,
          position: mapCenter,
        });
      }
    }, [map]);
    
    return null;
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      <NavigationBar />
      <Breadcrumb title="Contact Us" />
      
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`${info.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm sm:text-base text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Map */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Location</h2>
            <div className="rounded-lg overflow-hidden">
              <LoadScript 
                googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                libraries={['marker']} // Add marker library
              >
                <GoogleMap
                  mapContainerStyle={{
                    width: '100%',
                    height: '300px',
                    '@media (min-width: 640px)': {
                      height: '400px',
                    },
                  }}
                  center={mapCenter}
                  zoom={14}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  <Marker />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name*"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email*"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message*"
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                required
              ></textarea>
              <div className="flex items-start sm:items-center gap-2">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-0 rounded text-orange-500 focus:ring-orange-500"
                />
                <label className="text-sm sm:text-base text-gray-600">
                  Save my information for future correspondence
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 text-sm sm:text-base
                  ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} transition-colors`}
              >
                {loading ? 'Sending...' : success ? 'Message Sent!' : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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

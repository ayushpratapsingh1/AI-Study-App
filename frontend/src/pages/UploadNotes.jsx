import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, Check, BookOpen, Clock, Tag, FileText } from 'lucide-react';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import NavigationBar from './NavigationBar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const UploadNotes = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    description: '',
    category: null,
    difficulty: null,
    tags: [],
  });
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const removeFile = (fileToRemove) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  const categories = [
    { value: 'programming', label: 'Programming' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'language', label: 'Language' },
    { value: 'business', label: 'Business' },
  ];

  const difficulties = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error('Please select a file to upload');
      return;
    }

    setUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', files[0]);
    Object.keys(formData).forEach(key => {
      uploadData.append(key, 
        key === 'tags' ? JSON.stringify(formData[key]) : 
        key === 'category' || key === 'difficulty' ? formData[key].value : 
        formData[key]
      );
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Notes uploaded successfully!');
      setUploadSuccess(true);
      setTimeout(() => {
        setFormData({
          title: '',
          subject: '',
          description: '',
          category: null,
          difficulty: null,
          tags: [],
        });
        setFiles([]);
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Upload failed. Please try again.');
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <NavigationBar />
      <Breadcrumb title="Upload Notes" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
           }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8" />
                <div>
                  <h1 className="text-2xl font-bold">Share Your Knowledge</h1>
                  <p className="text-orange-100">Upload your study notes to help others learn</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <Select
                      value={formData.category}
                      onChange={(option) => setFormData(prev => ({ ...prev, category: option }))}
                      options={categories}
                      className="react-select"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty Level *</label>
                    <Select
                      value={formData.difficulty}
                      onChange={(option) => setFormData(prev => ({ ...prev, difficulty: option }))}
                      options={difficulties}
                      className="react-select"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows="4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <Select
                    isMulti
                    value={formData.tags}
                    onChange={(options) => setFormData(prev => ({ ...prev, tags: options }))}
                    options={[
                      { value: 'python', label: 'Python' },
                      { value: 'javascript', label: 'JavaScript' },
                      { value: 'react', label: 'React' },
                      { value: 'data-science', label: 'Data Science' },
                      // Add more tags as needed
                    ]}
                    className="react-select"
                  />
                </div>

                <div className="border-2 border-dashed rounded-lg p-8">
                  <div {...getRootProps()} className={`text-center cursor-pointer ${
                    isDragActive ? 'bg-orange-50' : ''
                  }`}>
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-12 w-12 text-orange-500" />
                    <p className="mt-2 text-sm text-gray-600">
                      Drag & drop your notes here, or click to select files
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Maximum file size: 10MB. Supported formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>

                {/* File Preview */}
                {files.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    {files.map((file) => (
                      <div 
                        key={file.name} 
                        className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-orange-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">{file.name}</p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(file)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <X className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={uploading || files.length === 0}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2
                    ${uploading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}
                    transition-colors duration-200`}
                >
                  {uploading ? (
                    <>
                      <Clock className="animate-spin h-5 w-5 mr-2" />
                      Uploading...
                    </>
                  ) : uploadSuccess ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      Uploaded Successfully!
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5 mr-2" />
                      Upload Notes
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
};

export default UploadNotes;

'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Send, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Have questions or need assistance? We're here to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-gvro-red dark:text-red-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>

            <form 
              action="https://formsubmit.co/gvropublicsafetyservices@gmail.com" 
              method="POST" 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gvro-red focus:border-gvro-red dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gvro-red focus:border-gvro-red dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gvro-red focus:border-gvro-red dark:bg-gray-800 dark:text-white transition-colors resize-vertical"
                  placeholder="Please describe your inquiry or concern in detail..."
                />
              </div>

              {/* Hidden form fields for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/thankyou" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - GVRO Department Hub" />

              <button
                type="submit"
                className="w-full bg-gvro-red hover:bg-gvro-red-dark dark:bg-gvro-red dark:hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <Mail className="text-gvro-red dark:text-red-400 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Direct Contact</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <a 
                    href="mailto:gvropublicsafetyservices@gmail.com"
                    className="text-gvro-red dark:text-red-400 hover:text-gvro-red-dark dark:hover:text-red-300 transition-colors"
                  >
                    gvropublicsafetyservices@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Discord Server</h3>
                  <a 
                    href="https://discord.gg/Xgw7JDQ2HY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gvro-red dark:text-red-400 hover:text-gvro-red-dark dark:hover:text-red-300 transition-colors inline-flex items-center gap-2"
                  >
                    Join Our Discord
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Times</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">General Inquiries</span>
                  <span className="font-semibold text-gvro-red dark:text-red-400">24-48 hours</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Application Status</span>
                  <span className="font-semibold text-gvro-red dark:text-red-400">48-72 hours</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">Technical Issues</span>
                  <span className="font-semibold text-gvro-red dark:text-red-400">12-24 hours</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300">Urgent Matters</span>
                  <span className="font-semibold text-gvro-red dark:text-red-400">2-6 hours</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I apply to a department?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Visit our Applications page and click the "Apply" button for your desired department.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What are the age requirements?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You must be at least 13 years old to apply for any department position.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How long does the application process take?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Applications are typically reviewed within 72 hours. The complete process including training may take 1-2 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

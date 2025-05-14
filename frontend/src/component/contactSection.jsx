import { useState, useRef, useEffect } from "react";
import { User, Bot, ArrowLeft, Heart, Clock, MapPin, Phone, Mail, X, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom"


// Conversation flow data structure
const conversationFlows = {
  initial: {
    message: "👋 Hello! I'm your virtual assistant. How can I help you today?",
    options: [
      { id: "general", label: "General Inquiries", icon: "User" },
      { id: "support", label: "Support Requests", icon: "Bot" },
      { id: "contact", label: "Contact Information", icon: "Phone" },
    ],
  },
  general: {
    message: "What would you like to know about?",
    options: [
      { id: "sales", label: "Sales Questions", icon: "User" },
      { id: "partnership", label: "Partnership Opportunities", icon: "User" },
      { id: "feedback", label: "Submit Feedback", icon: "User" },
      { id: "back_to_initial", label: "Back to Main Menu", icon: "ArrowLeft" },
    ],
  },
  sales: {
    message:
      "I'd be happy to answer your sales questions. What would you like to know?",
    form: {
      title: "Sales Inquiry",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        { id: "company", label: "Company Name", type: "text", required: false },
        {
          id: "question",
          label: "Your Question",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Send Inquiry",
      successMessage:
        "Thanks for your inquiry! Our sales team will get back to you within 24 hours.",
    },
    options: [{ id: "back_to_general", label: "Back", icon: "ArrowLeft" }],
  },
  partnership: {
    message:
      "We're always looking for great partnerships! Please provide some details about your proposal:",
    form: {
      title: "Partnership Proposal",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        { id: "company", label: "Company Name", type: "text", required: true },
        {
          id: "proposal",
          label: "Partnership Proposal",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Submit Proposal",
      successMessage:
        "Thank you for your partnership proposal! Our business development team will review it and contact you soon.",
    },
    options: [{ id: "back_to_general", label: "Back", icon: "ArrowLeft" }],
  },
  feedback: {
    message: "We value your feedback! Please share your thoughts with us:",
    form: {
      title: "Feedback Submission",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: false },
        { id: "email", label: "Email Address", type: "email", required: true },
        {
          id: "feedback",
          label: "Your Feedback",
          type: "textarea",
          required: true,
        },
        {
          id: "rating",
          label: "Rating (1-5)",
          type: "number",
          min: 1,
          max: 5,
          required: true,
        },
      ],
      submitLabel: "Submit Feedback",
      successMessage:
        "Thank you for your feedback! We appreciate you taking the time to help us improve.",
    },
    options: [{ id: "back_to_general", label: "Back", icon: "ArrowLeft" }],
  },
  support: {
    message: "What kind of support do you need?",
    options: [
      { id: "technical", label: "Technical Support", icon: "Bot" },
      { id: "billing", label: "Billing Support", icon: "Bot" },
      { id: "product", label: "Product Support", icon: "Bot" },
      { id: "back_to_initial", label: "Back to Main Menu", icon: "ArrowLeft" },
    ],
  },
  technical: {
    message:
      "I can help with technical issues. Please describe the problem you're experiencing:",
    form: {
      title: "Technical Support Request",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        {
          id: "product",
          label: "Product/Service",
          type: "text",
          required: true,
        },
        {
          id: "issue",
          label: "Issue Description",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Submit Support Request",
      successMessage:
        "Your technical support request has been submitted. Our team will respond within 24 hours. Your ticket number is #" +
        Math.floor(10000 + Math.random() * 90000),
    },
    options: [{ id: "back_to_support", label: "Back", icon: "ArrowLeft" }],
  },
  billing: {
    message: "For billing support, please provide the following information:",
    form: {
      title: "Billing Support Request",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        {
          id: "accountNumber",
          label: "Account Number",
          type: "text",
          required: true,
        },
        {
          id: "issue",
          label: "Billing Issue",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Submit Billing Request",
      successMessage:
        "Your billing support request has been submitted. Our billing department will contact you within 1-2 business days.",
    },
    options: [{ id: "back_to_support", label: "Back", icon: "ArrowLeft" }],
  },
  product: {
    message: "Need help with one of our products? Please provide details:",
    form: {
      title: "Product Support Request",
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        { id: "product", label: "Product Name", type: "text", required: true },
        {
          id: "issue",
          label: "Issue Description",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Submit Product Support Request",
      successMessage:
        "Your product support request has been submitted. Our product specialists will get back to you soon.",
    },
    options: [{ id: "back_to_support", label: "Back", icon: "ArrowLeft" }],
  },
  contact: {
    message: "What contact information are you looking for?",
    options: [
      { id: "email_contacts", label: "Email Contacts", icon: "Mail" },
      { id: "business_hours", label: "Business Hours", icon: "Clock" },
      { id: "back_to_initial", label: "Back to Main Menu", icon: "ArrowLeft" },
    ],
  },
  email_contacts: {
    message: "Here are our email contacts:",
    content: [
      { title: "General Inquiries", value: "info@company.com" },
      { title: "Customer Support", value: "support@company.com" },
      { title: "Sales Department", value: "sales@company.com" },
      { title: "Human Resources", value: "hr@company.com" },
      { title: "Press & Media", value: "media@company.com" },
    ],
    options: [{ id: "back_to_contact", label: "Back", icon: "ArrowLeft" }],
  },
  business_hours: {
    message: "Our business hours are:",
    content: [
      { title: "Monday - Friday", value: "9:00 AM - 6:00 PM (Local Time)" },
      { title: "Saturday", value: "10:00 AM - 2:00 PM (Local Time)" },
      { title: "Sunday", value: "Closed" },
      {
        title: "Customer Support",
        value: "24/7 via email at support@company.com",
      },
    ],
    options: [{ id: "back_to_contact", label: "Back", icon: "ArrowLeft" }],
  },
  back_to_initial: { redirect: "initial" },
  back_to_general: { redirect: "general" },
  back_to_support: { redirect: "support" },
  back_to_contact: { redirect: "contact" },
};

// Icon mapping
const IconMap = {
  User: User,
  Bot: Bot,
  ArrowLeft: ArrowLeft,
  Clock: Clock,
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
};

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check window size on component mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Chatbot Component
  const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [currentNode, setCurrentNode] = useState("initial");
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const messagesEndRef = useRef(null);
  
    // Initialize chat with welcome message
    useEffect(() => {
      if (messages.length === 0) {
        addBotMessage(conversationFlows.initial.message);
      }
    }, []);
  
    // Scroll to bottom when messages change
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    // Handle node changes
    useEffect(() => {
      if (currentNode && conversationFlows[currentNode]) {
        const node = conversationFlows[currentNode];
  
        // Handle redirects
        if (node.redirect) {
          setCurrentNode(node.redirect);
          return;
        }
  
        // Add bot message for the new node if it has one
        if (
          node.message &&
          !messages.find((m) => m.text === node.message && m.type === "bot")
        ) {
          addBotMessage(node.message);
        }
      }
    }, [currentNode]);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    const addBotMessage = (text) => {
      setMessages((prev) => [...prev, { id: Date.now(), type: "bot", text }]);
    };
  
    const addUserMessage = (text) => {
      setMessages((prev) => [...prev, { id: Date.now(), type: "user", text }]);
    };
  
    const handleOptionSelect = (optionId, optionLabel) => {
      addUserMessage(optionLabel);
      setCurrentNode(optionId);
      setFormData({});
      setFormErrors({});
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  
      // Clear error when user types
      if (formErrors[name]) {
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
    };
  
    const validateForm = (fields) => {
      const errors = {};
      let isValid = true;
  
      fields.forEach((field) => {
        if (field.required && !formData[field.id]) {
          errors[field.id] = `${field.label} is required`;
          isValid = false;
        }
  
        if (
          field.type === "email" &&
          formData[field.id] &&
          !/\S+@\S+\.\S+/.test(formData[field.id])
        ) {
          errors[field.id] = "Please enter a valid email address";
          isValid = false;
        }
  
        if (field.type === "number" && formData[field.id]) {
          const num = Number(formData[field.id]);
          if (
            isNaN(num) ||
            (field.min !== undefined && num < field.min) ||
            (field.max !== undefined && num > field.max)
          ) {
            errors[
              field.id
            ] = `Please enter a number between ${field.min} and ${field.max}`;
            isValid = false;
          }
        }
      });
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const currentForm = conversationFlows[currentNode].form;
      if (!currentForm) return;
  
      if (validateForm(currentForm.fields)) {
        setIsSubmitting(true);
  
        // Simulate form submission
        setTimeout(() => {
          // Create a summary of the form submission
          const formSummary = currentForm.fields
            .map(
              (field) =>
                `${field.label}: ${formData[field.id] || "Not provided"}`
            )
            .join("\n");
  
          addUserMessage(`Submitted ${currentForm.title}:\n${formSummary}`);
          addBotMessage(currentForm.successMessage);
  
          setFormData({});
          setIsSubmitting(false);
        }, 1500);
      }
    };
  
    const renderIcon = (iconName) => {
      const IconComponent = IconMap[iconName];
      return IconComponent ? <IconComponent className="w-4 h-4 mr-2" /> : null;
    };
  
    const renderOptions = () => {
      const node = conversationFlows[currentNode];
      if (!node || !node.options) return null;
  
      return (
        <div className="flex flex-wrap gap-2 mt-3">
          {node.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id, option.label)}
              className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
            >
              {option.icon && renderIcon(option.icon)}
              {option.label}
            </button>
          ))}
        </div>
      );
    };
  
    const renderForm = () => {
      const node = conversationFlows[currentNode];
      if (!node || !node.form) return null;
  
      return (
        <form onSubmit={handleFormSubmit} className="mt-4 space-y-3">
          <h3 className="font-medium text-gray-700">{node.form.title}</h3>
          {node.form.fields.map((field) => (
            <div key={field.id} className="space-y-1">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id] || ""}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formErrors[field.id] ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="3"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id] || ""}
                  onChange={handleInputChange}
                  min={field.min}
                  max={field.max}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formErrors[field.id] ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
              {formErrors[field.id] && (
                <p className="text-sm text-red-500">{formErrors[field.id]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {isSubmitting ? "Submitting..." : node.form.submitLabel}
          </button>
        </form>
      );
    };
  
    const renderContent = () => {
      const node = conversationFlows[currentNode];
      if (!node || !node.content) return null;
  
      return (
        <div className="mt-3 space-y-2">
          {node.content.map((item, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-md">
              <div className="font-medium text-gray-700">{item.title}</div>
              <div className="text-gray-600">{item.value}</div>
            </div>
          ))}
        </div>
      );
    };
  
    // Determine chatbot position and size based on screen size
    const chatbotClassNames = isMobile
      ? "fixed inset-0 z-50 flex flex-col bg-white" // Full screen on mobile
      : "fixed bottom-16 right-4 w-64 sm:w-72 md:w-80 lg:w-96 h-[70%] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"; // Much smaller size on desktop
  
    return (
      <div className={chatbotClassNames}>
        {/* Header - Fixed at the top */}
        <div className="bg-blue-600 text-white p-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">Company Support</h2>
              <p className="text-sm text-blue-100">We're here to help you</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
        </div>
  
        {/* Messages container with max height */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                <div className="whitespace-pre-line">{message.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
  
          {/* Options, Form, or Content based on current node */}
          {renderOptions()}
          {renderForm()}
          {renderContent()}
        </div>
  
        {/* Footer - Fixed at the bottom */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 sticky bottom-0 z-10">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center mt-1">
                <Mail className="w-3 h-3 mr-1" />
                <span>support@company.com</span>
              </div>
            </div>
            <div className="text-left sm:text-right mt-2 sm:mt-0">
              <div className="flex items-center sm:justify-end">
                <Clock className="w-3 h-3 mr-1" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="mt-1">24/7 Chat Support</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">Love Quiz</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Contact Content */}
      <main className="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
            We're here to help! Have questions or need assistance? Our team is
            just a click away. Use our chat support for immediate assistance.
          </p>

          <div className="max-w-sm mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-4 md:py-6 text-center">
                <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-2" />
                <h3 className="text-lg md:text-xl font-bold text-white">Chat With Us</h3>
                <p className="text-blue-100 mt-1 text-sm">
                  Get quick answers from our live chat support
                </p>
              </div>

              <div className="px-4 py-5 mt-8 md:mt-16">
                <p className="text-gray-600 mb-4 text-center text-sm">
                  We're here to help with any questions, feedback, or support
                  you need.
                </p>

                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-4 shine flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 shadow-button mb-4 hover:bg-gray-50 transition-all bg-pink-700 w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:opacity-90"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chatbot Integration */}
      {isOpen && <Chatbot />}
      
    </div>
  );
};

export default ContactPage;
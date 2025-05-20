import { useRef, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying');
  const token = searchParams.get('token');
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;  // 🛑 Skip if already run
    hasRun.current = true;
    const verifyEmail = async () => {
            console.log('running verify email');
      if (!token) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/verify-email/${token}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
      }
    };

    verifyEmail();
  }, [token]);

  const renderContent = () => {
    switch (status) {
      case 'verifying':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold mb-2">Verifying your email...</h2>
            <p className="text-gray-600">Please wait while we verify your email address.</p>
          </div>
        );
      case 'success':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Email Verified!</h2>
            <p className="text-gray-600 mb-6">Your email has been successfully verified. You can now log in to your account.</p>
            <button
              onClick={() => navigate('/pass-login')}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium"
            >
              Go to Login
            </button>
          </div>
        );
      case 'error':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Verification Failed</h2>
            <p className="text-gray-600 mb-6">The verification link is invalid or has expired.</p>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium"
            >
              Go to Sign Up
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-rose-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default VerifyEmail;

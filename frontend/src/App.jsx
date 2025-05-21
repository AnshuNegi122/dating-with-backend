import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { isAuthenticated } from "./services/api"

import Landing from "./pages/Landing"
import Quiz from "./pages/Quiz"
import OtpLogin from "./pages/OtpLogin"
import PasswordLogin from "./pages/PasswordLogin"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cookies from "./pages/Cookies"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import VerifyEmail from "./component/VerifyEmail"
import Dashboard from "./pages/Dashboard"
import ForgotPassword from "./component/ForgetPassword"
import ResetPassword from "./component/ResetPassword"


// Protected route component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<PasswordLogin />} />
        <Route path="/otp-login" element={<OtpLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </Router>
  )
}

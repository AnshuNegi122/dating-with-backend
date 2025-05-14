"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import Quiz from "./pages/Quiz"
import Preloader from "./component/Preloader"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500) // simulate 1.5s load
    return () => clearTimeout(timeout)
  }, [])


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

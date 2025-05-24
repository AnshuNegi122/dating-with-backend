"use client"

import { useState, useEffect } from "react"
import DashboardSection from "../component/dashboard/Dashboard"

function Landing() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
        <DashboardSection />
    </>
  )
}

export default Landing

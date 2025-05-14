import { useEffect, useRef } from "react"

const AnimatedBackground1 = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Heart particles
    const particles = []
    const colors = ["#ec4899", "#d946ef", "#9333ea"]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()

        // Draw heart shape
        const topCurveHeight = this.size * 0.3
        ctx.moveTo(this.x, this.y + topCurveHeight)
        // Left curve
        ctx.bezierCurveTo(this.x, this.y, this.x - this.size, this.y, this.x - this.size, this.y + topCurveHeight)
        // Bottom left curve
        ctx.bezierCurveTo(
          this.x - this.size,
          this.y + this.size * 1.3,
          this.x,
          this.y + this.size * 2,
          this.x,
          this.y + this.size * 2,
        )
        // Bottom right curve
        ctx.bezierCurveTo(
          this.x,
          this.y + this.size * 2,
          this.x + this.size,
          this.y + this.size * 1.3,
          this.x + this.size,
          this.y + topCurveHeight,
        )
        // Right curve
        ctx.bezierCurveTo(this.x + this.size, this.y, this.x, this.y, this.x, this.y + topCurveHeight)

        ctx.closePath()
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

export default AnimatedBackground1

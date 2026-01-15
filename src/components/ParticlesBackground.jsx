import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles = []
    let animationFrameId
    // Standardize mouse/pointer object
    let pointer = { x: -9999, y: -9999 }

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        // baseX/Y is the "anchor" point that moves slowly
        this.baseX = this.x
        this.baseY = this.y
        // Visual properties matched to Hero
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.density = Math.random() * 200 + 2
      }

      update() {
        // 1. Calculate interaction with pointer
        const dx = pointer.x - this.x
        const dy = pointer.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          // Repulsion logic from Hero.jsx
          const force = (maxDistance - distance) / maxDistance
          const directionX = dx / distance
          const directionY = dy / distance
          this.x -= directionX * force * this.density
          this.y -= directionY * force * this.density
        } else {
          // Smooth return to base position (easing)
          if (this.x !== this.baseX) {
            this.x += (this.baseX - this.x) / 20
          }
          if (this.y !== this.baseY) {
            this.y += (this.baseY - this.y) / 20
          }
        }

        // 2. Drift the base position so the whole constellation moves
        this.baseX += this.speedX
        this.baseY += this.speedY

        // 3. Screen wrap-around for the base positions
        if (this.baseX < 0) this.baseX = canvas.width
        if (this.baseX > canvas.width) this.baseX = 0
        if (this.baseY < 0) this.baseY = canvas.height
        if (this.baseY > canvas.height) this.baseY = 0
      }

      draw() {
        ctx.fillStyle = 'rgba(220, 220, 220, 0.6)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      // Use Hero's density logic: 1 particle per 15000 pixels (or 25k for mobile)
      const area = canvas.width * canvas.height
      const particleGap = isMobile ? 25000 : 15000
      const count = Math.floor(area / particleGap)
      
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        // Optimized connection drawing
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          // Use squared distance for initial check (faster than Math.sqrt)
          const distSq = dx * dx + dy * dy
          const maxDist = 100
          
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq)
            const opacity = 1 - dist / maxDist
            ctx.beginPath()
            // Matching Hero's stroke style precisely
            ctx.strokeStyle = `rgba(200, 200, 200, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
        particles[i].update()
        particles[i].draw()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMove = (e) => {
      if (e.touches) {
        pointer.x = e.touches[0].clientX
        pointer.y = e.touches[0].clientY
      } else {
        pointer.x = e.clientX
        pointer.y = e.clientY
      }
    }

    const handleLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    window.addEventListener('touchmove', handleMove, { passive: true })
    window.addEventListener('touchend', handleLeave)

    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050507]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* The same gradient overlay used in Hero for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]" />
    </div>
  )
}
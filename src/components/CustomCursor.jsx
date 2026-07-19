import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const hoverables = 'a, button, input, textarea, .cursor-pointer, [data-cursor="link"]'

    const onOver = (e) => {
      if (e.target.closest(hoverables)) {
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderColor = 'rgba(37,99,235,0.8)'
      }
    }
    const onOut = (e) => {
      if (e.target.closest(hoverables)) {
        ring.style.width = '32px'
        ring.style.height = '32px'
        ring.style.borderColor = 'rgba(6,182,212,0.6)'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    const frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'

export function ImageMagnifier({
  src,
  width = 550,
  height = 550,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}: {
  src: string
  width?: number
  height?: number
  magnifierHeight?: number
  magnifieWidth?: number
  zoomLevel?: number
}) {
  const [[x, y], setXY] = useState([0, 0])
  const [[imgWidth, imgHeight], setSize] = useState([0, 0])
  const [showMagnifier, setShowMagnifier] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    const elem = e.currentTarget
    const { width, height } = elem.getBoundingClientRect()
    setSize([width, height])
    setShowMagnifier(true)
    document.body.classList.add('overflow-hidden')
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const elem = e.currentTarget
    const { top, left } = elem.getBoundingClientRect()

    const touch = e.touches[0]
    const x = touch.pageX - left - window.pageXOffset
    const y = touch.pageY - top - window.pageYOffset
    setXY([x, y])
  }

  const handleTouchEnd = () => {
    setShowMagnifier(false)
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <div className={`relative ${height} ${width}`}>
      <Image
        src={src}
        width={width}
        height={height}
        className={`${height} ${width}`}
        onMouseEnter={(e) => {
          const elem = e.currentTarget
          const { width, height } = elem.getBoundingClientRect()
          setSize([width, height])
          setShowMagnifier(true)
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget
          const { top, left } = elem.getBoundingClientRect()

          const x = e.pageX - left - window.pageXOffset
          const y = e.pageY - top - window.pageYOffset
          setXY([x, y])
        }}
        onMouseLeave={() => {
          setShowMagnifier(false)
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        alt={'img'}
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  )
}

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface PhotoCollageProps {
  images: { source: string }[]
}

function PhotoCollage({ images }: PhotoCollageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length === 0) return null

  // Different layouts based on number of images
  const getLayoutClasses = () => {
    switch (images.length) {
      case 1:
        return 'grid-cols-1'
      case 2:
        return 'grid-cols-2'
      case 3:
        return 'grid-cols-2 lg:grid-cols-3'
      case 4:
        return 'grid-cols-2'
      default:
        return 'grid-cols-2 lg:grid-cols-3'
    }
  }

  const getImageClasses = (index: number) => {
    const baseClasses = 'relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'

    // Special layouts for specific counts
    if (images.length === 3 && index === 0) {
      return `${baseClasses} lg:col-span-2 lg:row-span-2 h-[300px] lg:h-[500px]`
    }
    if (images.length === 3) {
      return `${baseClasses} h-[200px] lg:h-[245px]`
    }
    if (images.length === 4) {
      return `${baseClasses} h-[250px]`
    }
    if (images.length >= 5 && index === 0) {
      return `${baseClasses} col-span-2 h-[300px]`
    }

    return `${baseClasses} h-[200px] lg:h-[250px]`
  }

  return (
    <>
      <div className={`grid ${getLayoutClasses()} gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={getImageClasses(index)}
            onClick={() => setSelectedImage(image.source)}
          >
            <Image
              src={image.source}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoCollage

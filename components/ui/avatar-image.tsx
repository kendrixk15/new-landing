'use client'

import {
  FC,
  HTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Image from 'next/image'

interface AvatarImageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'src'> {
  src?: string
  text?: string
  alt?: string
  width?: number
  height?: number
  fallbackSrc?: string
}

const AvatarImage: FC<AvatarImageProps> = memo(({ 
  src, 
  text, 
  className = '', 
  alt = '',
  width = 40,
  height = 40,
  fallbackSrc = '/placeholder.svg',
  ...props 
}) => {
  const [isError, setIsError] = useState(false)
  const [source, setSource] = useState(src)
  
  const errorCallback = useCallback(() => {
    setIsError(true)
  }, [])

  useEffect(() => {
    setSource(src)
    setIsError(false)
  }, [src])

  // If no source, source is empty, or there's an error, show text fallback
  if (!source || source === '' || isError) {
    return (
      <div
        className={`flex justify-center items-center rounded-md text-[22px] text-white uppercase bg-slate-500 ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
        {...props}
      >
        {text && text !== '' ? text[0] : ''}
      </div>
    )
  }

  return (
    <Image
      src={source}
      alt={alt || text || 'Avatar image'}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      onError={errorCallback}
      onLoad={() => setIsError(false)}
      {...props}
    />
  )
})

AvatarImage.displayName = 'AvatarImage'

export default AvatarImage


"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

interface PhotoGalleryProps {
  images: { src: string; alt: string }[]
  eventName: string
}

export function PhotoGallery({ images, eventName }: PhotoGalleryProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Camera className="h-4 w-4" /> View Gallery
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-4 sm:p-6 bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle>{eventName} - Photo Gallery</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative w-full overflow-hidden rounded-lg">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}

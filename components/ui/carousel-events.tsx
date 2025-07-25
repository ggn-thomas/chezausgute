"use client"

import { useState } from 'react'
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { eventsData } from "../data/carousel-events-data" // Import des données
import { ChevronLeft, ChevronRight, X } from "lucide-react" // Import des icônes de flèches
import {Bebas_Neue} from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

interface EventItem {
  id: number
  image?: string
  alt: string
  mainContent?: React.ReactNode
  logos?: React.ReactNode
}

export default function CarouselEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  const openFullscreen = (event: EventItem) => {
    setSelectedEvent(event)
  }

  const closeFullscreen = () => {
    setSelectedEvent(null)
  }

  return (
    <div 
      id="events"
      className="relative text-black py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
      <h2 className={`text-center text-5xl md:text-6xl font-bold mb-12 text-black ${bebasNeue.className}`}>Programme et Events</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent className="-ml-4">
          {eventsData.map((event) => (
            <CarouselItem key={event.id} className="pl-4 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              {/* Nouvelle div externe pour gérer les coins arrondis et l'overflow - Format A4 portrait (ratio 1:1.414) */}
              <div 
                className="relative w-full aspect-[1/1.414] max-w-[280px] mx-auto overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openFullscreen(event)}
              >
                {/* Div interne qui gère l'animation de mise à l'échelle et le group hover */}
                <div className="group relative w-full h-full transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.alt}
                    layout="fill"
                    objectFit="cover"
                    // Ajustement de la luminosité au survol
                    className="brightness-75 transition-all duration-300 ease-in-out group-hover:brightness-100 group-hover:scale-110"
                  />
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className={`text-white text-lg font-bold ${bebasNeue.className}`}>
                      Cliquer pour agrandir
                    </span>
                  </div>
                  {/* Conteneur pour le texte principal, positionné de manière fixe */}
                  {event.mainContent && (
                    <div className="absolute bottom-24 left-4 right-4 text-white">{event.mainContent}</div>
                  )}
                  {/* Conteneur pour les logos, positionné de manière fixe en bas */}
                  {event.logos && (
                    <div className="absolute bottom-4 left-4 right-4 text-white flex flex-wrap gap-2 justify-end items-center">
                      {event.logos}
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Ajout de l'icône ChevronLeft au bouton précédent avec bg-black et text-white */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        {/* Ajout de l'icône ChevronRight au bouton suivant avec bg-black et text-white */}
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black text-white">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
      </div>

      {/* Modal plein écran */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Bouton fermer */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image plein écran */}
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedEvent.image || "/placeholder.svg"}
              alt={selectedEvent.alt}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Titre en bas */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className={`text-3xl font-bold text-white ${bebasNeue.className}`}>
              Event #{selectedEvent.id}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}

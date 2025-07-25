"use client"

import {Bebas_Neue} from 'next/font/google'
import React from 'react';
import CarouselEvents from "../components/ui/carousel-events"
import About from "../components/About"
import MenuCards from "../components/MenuCards"
import { Footer } from "../components/Footer";
import { ThreeDPhotoCarousel } from "../components/ui/3d-carousel"

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <div>
      {/* Section Hero */}
      <div 
        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="relative min-h-screen bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Logo au-dessus du texte */}
            <img 
              src="/logo.png" 
              alt="Logo Chez Auguste" 
              className="mx-auto mb-6 w-[50px] md:w-[100px] lg:w-[150px] h-auto"
            />
            
            {/* Texte en dessous */}
            <h1 className={`text-6xl md:text-9xl font-bold mb-4 text-white ${bebasNeue.className}`}>
              Chez Auguste
            </h1>
            <p className={`text-xl md:text-2xl text-[#ffcc00] font-bold ${bebasNeue.className}`}>
              BAR - EVENTS - MIXOLOGIE - FLAIR - 
            </p>
          </div>
        </div>
      </div>
      
      {/* Dégradé diagonal créatif du jaune au noir */}
      <div className="bg-gradient-to-br from-yellow-400 via-[#ffcc00] via-yellow-600 via-orange-700 via-gray-700 to-black relative overflow-hidden">
        {/* Couche supplémentaire pour effet de vague */}
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-yellow-300/20 via-orange-600/10 to-transparent opacity-50"></div>
        {/* Section Carousel */}
        <CarouselEvents />
        
        {/* Section Horaires d'ouverture */}
        <About />
        
        {/* Section 3D Carousel */}
        <ThreeDPhotoCarousel />
        
        {/* Section Menu Cards */}
        <MenuCards />
      </div>

      <Footer/>
    </div>
  )

}
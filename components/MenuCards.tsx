"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { X, Utensils, Star, Clock, Users } from 'lucide-react'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

interface MenuCard {
  id: number
  title: string
  image: string
  description: string
  category: string
  features: string[]
}

const menuCards: MenuCard[] = [
  {
    id: 1,
    title: "Carte des Boissons",
    image: "/exemple-carte.png",
    description: "Découvrez notre sélection de cocktails, bières et spiritueux",
    category: "Boissons",
    features: ["Cocktails signature", "Bières artisanales", "Spiritueux premium"]
  },
  {
    id: 2,
    title: "Planche à partager",
    image: "/exemple-carte.png", 
    description: "Nos plats et en-cas pour accompagner vos soirées",
    category: "Food",
    features: ["Produits locaux", "Fait maison", "À partager"]
  },
  {
    id: 3,
    title: "Carte des Vins",
    image: "/exemple-carte.png",
    description: "Une sélection raffinée de vins pour tous les goûts",
    category: "Vins",
    features: ["Vignerons locaux", "Grands crus", "Conseils sommelier"]
  }
]

const categoryColors = {
  "Boissons": "from-[#ffcc00] to-yellow-300",
  "Food": "from-black to-gray-800",
  "Vins": "from-[#ffcc00] to-amber-400"
}

export default function MenuCards() {
  const [selectedCard, setSelectedCard] = useState<MenuCard | null>(null)

  const openFullscreen = (card: MenuCard) => {
    setSelectedCard(card)
  }

  const closeFullscreen = () => {
    setSelectedCard(null)
  }

  return (
    <div id="cartes" className="relative min-h-screen flex items-center justify-center">
      
      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-black p-8">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#ffcc00] rounded-full p-4 mr-4">
              <Utensils className="w-10 h-10 text-black" />
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold text-black ${bebasNeue.className}`}>
              Notre Carte
            </h2>
          </div>
          <p className={`text-xl text-white ${bebasNeue.className} max-w-2xl mx-auto`}>
            Explorez nos différentes cartes et découvrez l'univers gustatif de Chez Auguste
          </p>
        </div>

        {/* Grille des cartes avec design original */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => openFullscreen(card)}
              className="group relative cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Container avec design asymétrique */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                
                {/* Badge catégorie */}
                <div className={`absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[card.category as keyof typeof categoryColors]} text-black font-bold text-sm ${bebasNeue.className}`}>
                  {card.category}
                </div>

                {/* Image de la carte avec effet parallax */}
                <div className="relative h-150 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay au survol avec animation */}
                  <div className="absolute inset-0 bg-[#ffcc00]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Star className="w-12 h-12 text-black mx-auto mb-2" />
                      <span className={`text-black text-xl font-bold ${bebasNeue.className}`}>
                        Cliquer pour découvrir
                      </span>
                    </div>
                  </div>
                </div>
                {/* Effet de bordure animé */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ffcc00] transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal plein écran amélioré */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Bouton fermer avec design amélioré */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-60 bg-[#ffcc00] hover:bg-yellow-300 rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-black" />
          </button>
          
          {/* Image plein écran */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedCard.image}
              alt={selectedCard.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          
          {/* Informations en bas avec design moderne */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className={`inline-block px-4 py-1 bg-[#ffcc00] text-black rounded-full text-sm font-bold mb-3 ${bebasNeue.className}`}>
              {selectedCard.category}
            </div>
            <h3 className={`text-3xl font-bold text-white mb-2 ${bebasNeue.className}`}>
              {selectedCard.title}
            </h3>
            <p className="text-gray-200 max-w-md">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
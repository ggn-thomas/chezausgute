import {Bebas_Neue} from 'next/font/google'
import { Instagram, Facebook } from 'lucide-react'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

export default function About() {
  return (
    <div id="about" className="relative flex items-center justify-center min-h-screen py-8">

      <div className="w-full text-left text-black relative z-10 p-6">
        {/* Titre principal */}
        <div className="flex items-baseline justify-center mb-8 gap-6">
          <h2 className={`text-6xl md:text-6xl font-bold text-black ${bebasNeue.className}`}>
            À Propos
          </h2>
          <div className="flex items-center gap-3">
              <Instagram className="w-10 h-10 text-black hover:text-pink-500 transition-colors cursor-pointer" />
              <Facebook className="w-10 h-10 text-black hover:text-blue-600 transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Section Gauche - Google Maps + Horaires */}
          <div className="space-y-3 flex flex-col">
            <h3 className={`text-lg md:text-xl font-bold text-white ${bebasNeue.className} mb-1 text-left`}>
              Où ?
            </h3>

            <div className="bg-black rounded-lg p-3 shadow-lg">
              <h4 className={`text-base font-bold text-[#ffcc00] ${bebasNeue.className} mb-1`}>
                Adresse
              </h4>
              <p className="text-white text-xs">
                9 Pl. de la Petite Sirène<br />
                17000 La Rochelle, France
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-[#ffcc00] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5856167842847!2d-1.1527002000000001!3d46.1555582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzIwLjAiTiAxwrAwOScwOS43Ilc!5e0!3m2!1sfr!2sfr!4v1640995200000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emplacement Chez Auguste"
              ></iframe>
            </div>

            {/* Horaires */}
            <div>
              <h3 className={`text-lg md:text-xl font-bold text-white ${bebasNeue.className} mb-1 text-left`}>
                Quand ?
              </h3>
              <div className="bg-black rounded-lg p-3 shadow-lg">
                <h4 className={`text-base font-bold text-[#ffcc00] ${bebasNeue.className} mb-2`}>
                  Horaires d&apos;Ouverture
                </h4>
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Lundi</span>
                    <span className="text-gray-400">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Mardi</span>
                    <span className="text-gray-400">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Mercredi</span>
                    <span className="text-[#ffcc00] font-semibold">18h00 - 01h30</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Jeudi</span>
                    <span className="text-[#ffcc00] font-semibold">18h00 - 01h30</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Vendredi</span>
                    <span className="text-[#ffcc00] font-semibold">18h00 - 01h30</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Samedi</span>
                    <span className="text-[#ffcc00] font-semibold">18h00 - 01h30</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white font-semibold">Dimanche</span>
                    <span className="text-[#ffcc00] font-semibold">18h00 - 01h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Droite - Adresse + Vidéo */}
          <div className="space-y-3 flex flex-col">
            {/* Adresse */}
            
            <h3 className={`text-lg md:text-xl font-bold text-white ${bebasNeue.className} mb-1 text-left`}>
              Découvrez l&apos;ambiance
            </h3>
            
            {/* Vidéo */}
            <div className="bg-black rounded-lg p-2 shadow-lg">
              <video
                controls
                className="w-full h-64 lg:h-177 rounded-lg object-cover"
                poster="/background.jpg"
              >
                <source src="/video-presentation.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>

        {/* Section Nous Suivre - Full Width */}
        <div className="mt-3 bg-black rounded-lg p-3 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h3 className={`text-base font-bold text-[#ffcc00] ${bebasNeue.className}`}>
                Nous Suivre
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#ffcc00] hover:text-pink-500 transition-colors cursor-pointer" />
                <Facebook className="w-5 h-5 text-[#ffcc00] hover:text-blue-600 transition-colors cursor-pointer" />
              </div>
              
              {/* Logo */}
              <div className="ml-2">
                <img 
                  src="/logo.png" 
                  alt="Chez Auguste Logo" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
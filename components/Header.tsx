"use client"
import React, { useState } from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const menuItems = ['ACCUEIL', 'EVENTS', 'A PROPOS', 'CARTES'];

const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      {/* Mobile menu toggle button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden absolute top-6 right-6 z-20 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </button>
      
      {/* Menu mobile fullscreen */}
      <div className={`
        md:hidden fixed inset-0 bg-black z-40 flex items-center justify-center
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <ul className="flex flex-col items-center space-y-6">
          {menuItems.map((item) => (
            <li key={item} className="list-none">
              <a 
                href={item === 'ACCUEIL' ? '#' : item === 'A PROPOS' ? '#about' : item === 'EVENTS' ? '#events' : item === 'CARTES' ? '#cartes' : '#'} 
                className="relative inline-block group"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const targetId = item === 'ACCUEIL' ? '' : item === 'A PROPOS' ? 'about' : item === 'EVENTS' ? 'events' : item === 'CARTES' ? 'cartes' : '';
                  if (targetId) {
                    smoothScrollTo(targetId);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <span className="
                  relative z-10 block uppercase text-white 
                  font-sans font-semibold transition-colors duration-300 
                  group-hover:text-black text-xl py-2 px-3
                ">
                  {item}
                </span>
                <span className="
                  absolute inset-0 border-t-2 border-b-2 border-[#ffcc00]
                  transform scale-y-[2] opacity-0 
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                " />
                <span className="
                  absolute top-[2px] left-0 w-full h-full bg-[#ffcc00]
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                " />
              </a>
            </li>
          ))}
          
          {/* Icônes contact et réseaux sociaux pour mobile */}
          <li className="list-none mt-8">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+33123456789" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Téléphone"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-8 h-8" />
              </a>
              <a 
                href="mailto:contact@chezauguste.fr" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Email"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Instagram"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Facebook"
                onClick={() => setIsMenuOpen(false)}
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:block pt-4">
        <div className="flex flex-col w-full px-8">
          {/* Première ligne - Menu principal */}
          <div className="relative flex items-center">
            {/* Menu principal centré */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex flex-row space-x-4 lg:space-x-6">
                {menuItems.map((item) => (
                  <li key={item} className="list-none">
                    <a 
                      href={item === 'ACCUEIL' ? '#' : item === 'A PROPOS' ? '#about' : item === 'EVENTS' ? '#events' : item === 'CARTES' ? '#cartes' : '#'}
                      className="relative inline-block group"
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = item === 'ACCUEIL' ? '' : item === 'A PROPOS' ? 'about' : item === 'EVENTS' ? 'events' : item === 'CARTES' ? 'cartes' : '';
                        if (targetId) {
                          smoothScrollTo(targetId);
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="
                        relative z-10 block uppercase text-white 
                        font-sans font-semibold transition-colors duration-300 
                        group-hover:text-[#262626]
                        text-sm py-1 px-2 lg:text-base lg:py-1 lg:px-3
                      ">
                        {item}
                      </span>
                      <span className="
                        absolute inset-0 border-t-2 border-b-2 border-[#ffcc00]
                        transform scale-y-[2] opacity-0 
                        transition-all duration-300 origin-center
                        group-hover:scale-y-100 group-hover:opacity-100
                      " />
                      <span className="
                        absolute top-[2px] left-0 w-full h-full bg-[#ffcc00]
                        transform scale-0 opacity-0
                        transition-all duration-300 origin-top
                        group-hover:scale-100 group-hover:opacity-100
                      " />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Icônes de contact à droite */}
            <div className="ml-auto pr-30">
              <div className="flex items-center space-x-10">
              <a 
                href="tel:+33123456789" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Téléphone"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contact@chezauguste.fr" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#ffcc00] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          </div>
          
          {/* Deuxième ligne - Informations contact */}
          <div className="flex justify-center mt-2 pb-2">
            <div className="flex items-center space-x-8 text-sm text-[#ffcc00]">
              <a 
                href="tel:+33546123456"
                className="flex items-center space-x-2 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>05 46 12 34 56</span>
              </a>
              <div className="flex items-center space-x-2 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>123 Rue de la République, La Rochelle</span>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </nav>
  );
}
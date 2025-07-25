import Image from "next/image"
import type React from "react"

interface EventItem {
  id: number
  image: string
  alt: string
  mainContent?: React.ReactNode // Contenu principal (texte)
  logos?: React.ReactNode // Logos en bas
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    image: "/exemple-event1.jpg?height=500&width=300", // Placeholder pour l'image de l'événement
    alt: "Exemple-event",
    logos: (
      <>
        <Image
          src="/logo.png?height=50&width=50" // Placeholder pour le logo CGR Cinemas
          alt="Logo ChezAuguste"
          width={50}
          height={50}
          className="h-auto max-w-[50px]"
        />
      </>
    ),
  },
  {
    id: 2,
    image: "/exemple-event2.jpg?height=500&width=300", // Placeholder pour l'image de l'événement
    alt: "Project X4 Marvel Edition Event",
    logos: (
      <>
        <Image
          src="/logo.png?height=50&width=50" // Placeholder pour le logo CGR Cinemas
          alt="Logo ChezAuguste"
          width={50}
          height={50}
          className="h-auto max-w-[50px]"
        />
      </>
    ),
  },
  {
    id: 3,
    image: "/exemple-event3.jpg?height=500&width=300", // Placeholder pour l'image de l'événement
    alt: "Project X4 Marvel Edition Event",
    logos: (
      <>
        <Image
          src="/logo.png?height=50&width=50" // Placeholder pour le logo CGR Cinemas
          alt="Logo ChezAuguste"
          width={50}
          height={50}
          className="h-auto max-w-[50px]"
        />
      </>
    ),
  },
  {
    id: 4,
    image: "/exemple-event4.jpg?height=500&width=300", // Placeholder pour l'image de l'événement
    alt: "Project X4 Marvel Edition Event",
    logos: (
      <>
        <Image
          src="/logo.png?height=50&width=50" // Placeholder pour le logo CGR Cinemas
          alt="Logo ChezAuguste"
          width={50}
          height={50}
          className="h-auto max-w-[50px]"
        />
      </>
    ),
  },
  {
    id: 5,
    image: "/exemple-event5.jpeg?height=500&width=300", // Placeholder pour l'image de l'événement
    alt: "Project X4 Marvel Edition Event",
    logos: (
      <>
        <Image
          src="/logo.png?height=50&width=50" // Placeholder pour le logo CGR Cinemas
          alt="Logo ChezAuguste"
          width={50}
          height={50}
          className="h-auto max-w-[50px]"
        />
      </>
    ),
  },
]

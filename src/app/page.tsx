import {ShootingStars} from "@/components/ui/shooting-stars"
import Navbar from "./(portfolio)/components/navbar"
import HeroSectionHome from "./components/HeroSectionHome"
import {StarsBackground} from "@/components/ui/stars-background"
import {Footer} from "@/components/ui/footer"

export const metadata = {
  title: {
    es: "Agencia de Desarrollo Web | Fullstack Freelance",
    en: "Web Development Agency | Fullstack Freelance",
  },
  description: {
    es: "Desarrollamos soluciones web personalizadas con tecnologías modernas como Next.js, Laravel, y Django. Optimización SEO y rendimiento garantizado.",
    en: "We develop custom web solutions using modern technologies such as Next.js, Laravel, and Django. SEO optimization and guaranteed performance.",
  },
  keywords: {
    es: "desarrollo web, freelance, Next.js, Laravel, Django, React, SEO",
    en: "web development, freelance, Next.js, Laravel, Django, React, SEO",
  },
  openGraph: {
    title: {
      es: "Agencia de Desarrollo Web | Fullstack Freelance",
      en: "Web Development Agency | Fullstack Freelance",
    },
    description: {
      es: "Creamos sitios web de alto rendimiento con las mejores tecnologías. ¡Cotiza tu proyecto con nosotros!",
      en: "We create high-performance websites with the best technologies. Get a quote for your project with us!",
    },
    url: "https://tudominio.com",
    siteName: {
      es: "Tu Agencia Web",
      en: "Your Web Agency",
    },
    images: [
      {
        url: "https://tudominio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: {
          es: "Agencia de desarrollo web",
          en: "Web development agency",
        },
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
     <div>
      <Navbar/>

      <div className="pt-[100px]">
        <HeroSectionHome/>
      </div>
      <h1>
        Hola
      </h1>
  
      <Footer/>


      <ShootingStars />
      <StarsBackground />
    </div>
  )
}


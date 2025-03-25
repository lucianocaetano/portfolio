import {Footer} from "@/components/ui/footer"
import Navbar from "./components/navbar"
import {ShootingStars} from "@/components/ui/shooting-stars"
import {StarsBackground} from "@/components/ui/stars-background"

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>

      <div className="pt-[100px]">
        {children}
      </div>
  
      <Footer/>

      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default PortfolioLayout

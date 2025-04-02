import Footer from "./components/footer"
import Navbar from "./components/navbar"
import {ShootingStars} from "@/components/ui/shooting-stars"
import {StarsBackground} from "@/components/ui/stars-background"

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default PortfolioLayout

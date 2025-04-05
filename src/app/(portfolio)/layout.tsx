import Footer from "./components/footer"
import Navbar from "./components/navbar"

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

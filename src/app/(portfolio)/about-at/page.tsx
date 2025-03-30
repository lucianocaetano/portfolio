import { HeroSection } from './components/HeroSection'

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="max-w-[1000px] max-h-[700px] mx-auto">
        <HeroSection />
      </div>
      <div className="h-[400px] dark:bg-white bg-zinc-900"/>
    </div>
  )
}

export default AboutPage

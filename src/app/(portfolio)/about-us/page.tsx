import { HeroSection } from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import Banner from './components/Banner'
import ProjectExampleSection from './components/ProjectExampleSection'
import MethodologySection from './components/MethodologySection'

const AboutPage: React.FC = () => {
  return (
    <>
      <Banner/>
      <HeroSection />
      <div className='relative'>
        <div
          className='bg-white dark:bg-zinc-900 w-full h-full py-16'
        >
          <ServiceSection/>
        </div>
      </div>
      <div className="w-full max-w-[1000px] mx-auto mb-20">
        <h1 className="p-10 py-20 text-5xl">Our work examples</h1>
        <ProjectExampleSection/>
      </div>
      <MethodologySection/>
    </>
  )
}

export default AboutPage

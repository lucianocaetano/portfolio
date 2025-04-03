import {TracingBeam} from '@/components/ui/tracing-beam'
import { HeroSection } from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import Banner from './components/Banner'
import ProjectExampleSection from './components/ProjectExampleSection'

const AboutPage: React.FC = () => {
  return (
    <>
      <Banner/>
      <HeroSection />
      <TracingBeam
        className='bg-white dark:bg-zinc-900 w-full h-full py-16'
      >
        <ServiceSection/>
      </TracingBeam>
      <div className="w-full max-w-[1000px] mx-auto mb-20">
        <h1 className="p-10 py-20 text-5xl">Our work examples</h1>
        <ProjectExampleSection/>
      </div>
    </>
  )
}

export default AboutPage

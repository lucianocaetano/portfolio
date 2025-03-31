import {TracingBeam} from '@/components/ui/tracing-beam'
import { HeroSection } from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import ProjectExampleSection from './components/ProjectExampleSection'

const AboutPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TracingBeam
        className='bg-white dark:bg-zinc-900 w-full h-full py-16'
      >
        <ServiceSection/>
      </TracingBeam>
      <ProjectExampleSection/>
    </div>
  )
}

export default AboutPage

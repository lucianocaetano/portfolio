import {TracingBeam} from '@/components/ui/tracing-beam'
import { HeroSection } from './components/HeroSection'
import ServiceSection from './components/ServiceSection'

const AboutPage: React.FC = () => {
  return (
    <div>
        <HeroSection />
      <div className='absolute bg-white dark:bg-zinc-900 w-full py-16'>
        <TracingBeam>
          <ServiceSection/>
        </TracingBeam>
      </div>
    </div>
  )
}

export default AboutPage

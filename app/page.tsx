import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import LogoStrip from '@/components/LogoStrip'
import PlatformBentoGrid from '@/components/PlatformBentoGrid'
import AIAssistantCallout from '@/components/AIAssistantCallout'
import ProcessRow from '@/components/ProcessRow'
import AboutFoundersSection from '@/components/AboutFoundersSection'
import TrustedByPerformers from '@/components/TrustedByPerformers'
import GradientCTABand from '@/components/GradientCTABand'
import ResourcesRow from '@/components/ResourcesRow'
import MethodTimeline from '@/components/MethodTimeline'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <PlatformBentoGrid />
        <AIAssistantCallout />
        <ProcessRow />
        <AboutFoundersSection />
        <TrustedByPerformers />
        <GradientCTABand />
        <ResourcesRow />
        <MethodTimeline />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

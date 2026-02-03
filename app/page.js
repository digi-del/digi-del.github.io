import Header from './components/Header'
import Hero from './components/Hero'
import PaywallFeaturesSection from './components/PaywallFeaturesSection'
import PlatformSpecificDeliverySection from './components/PlatformSpecificDeliverySection'
import CachingDeliveryNetworkSection from './components/CachingDeliveryNetworkSection'
import CompleteFlowSection from './components/CompleteFlowSection'
import PaywallHandlesSection from './components/PaywallHandlesSection'
import ComparisonSection from './components/ComparisonSection'
import DeveloperPackagesSection from './components/DeveloperPackagesSection'
import TrustedByDevelopersSection from './components/TrustedByDevelopersSection'
import ForDevelopersAffiliatesSection from './components/ForDevelopersAffiliatesSection'
import FeaturedSection from './components/FeaturedSection'
import TrendingSection from './components/TrendingSection'
import CategorySection from './components/CategorySection'
import MostDownloadedSection from './components/MostDownloadedSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import AddPaywallCTASection from './components/AddPaywallCTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <PaywallFeaturesSection />
        <PlatformSpecificDeliverySection />
        <CachingDeliveryNetworkSection />
        <CompleteFlowSection />
        <PaywallHandlesSection />
        <ComparisonSection />
        <DeveloperPackagesSection />
        <TrustedByDevelopersSection />
        <ForDevelopersAffiliatesSection />
        <FeaturedSection />
        <TrendingSection />
        <CategorySection />
        <MostDownloadedSection />
        <HowItWorksSection />
                <AddPaywallCTASection />
        <TestimonialsSection />

    </main>
      <Footer />
    </>
  )
}



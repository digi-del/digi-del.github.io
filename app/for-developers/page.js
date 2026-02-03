import Header from '../components/Header'
import DevelopersHero from '../components/DevelopersHero'
import HowItWorksForDevelopersSection from '../components/HowItWorksForDevelopersSection'
import IntegrationExamplesSection from '../components/IntegrationExamplesSection'
import PricingModelsSection from '../components/PricingModelsSection'
import DeveloperDashboardSection from '../components/DeveloperDashboardSection'
import PackageTypeGuidesSection from '../components/PackageTypeGuidesSection'
import SuccessStoriesSection from '../components/SuccessStoriesSection'
import FAQForDevelopersSection from '../components/FAQForDevelopersSection'
import ReadyToMonetizeSection from '../components/ReadyToMonetizeSection'
import Footer from '../components/Footer'

export default function ForDevelopersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <DevelopersHero />
        <HowItWorksForDevelopersSection />
        <IntegrationExamplesSection />
        <PricingModelsSection />
        <DeveloperDashboardSection />
        <PackageTypeGuidesSection />
        <SuccessStoriesSection />
        <FAQForDevelopersSection />
        <ReadyToMonetizeSection />
      </main>
      <Footer />
    </>
  )
}


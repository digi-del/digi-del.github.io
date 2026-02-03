import Header from '../components/Header'
import AffiliatesHero from '../components/AffiliatesHero'
import WhyJoinAffiliateSection from '../components/WhyJoinAffiliateSection'
import HowAffiliateProgramWorksSection from '../components/HowAffiliateProgramWorksSection'
import ThreeEarningModelsSection from '../components/ThreeEarningModelsSection'
import SuccessStoriesAffiliatesSection from '../components/SuccessStoriesAffiliatesSection'
import FAQForAffiliatesSection from '../components/FAQForAffiliatesSection'
import ReadyToStartEarningSection from '../components/ReadyToStartEarningSection'
import Footer from '../components/Footer'

export default function AffiliatesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <AffiliatesHero />
        <WhyJoinAffiliateSection />
        <HowAffiliateProgramWorksSection />
        <ThreeEarningModelsSection />
        <SuccessStoriesAffiliatesSection />
        <FAQForAffiliatesSection />
        <ReadyToStartEarningSection />
      </main>
      <Footer />
    </>
  )
}



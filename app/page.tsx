import Description from '@/components/Description'
import Navbar from '@/components/Navbar'
import MedicalServices from '@/components/MedicalServices'
import InsuranceServices from '@/components/InsuranceServices'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <main className="md:hidden block">
      <Navbar />
      <Description />
      <MedicalServices />
      <InsuranceServices />
      <BottomNav />
    </main>
  )
}

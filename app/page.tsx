import Description from '@/components/Description'
import Navbar from '@/components/Navbar'
import MedicalServices from '@/components/MedicalServices'
import InsuranceServices from '@/components/InsuranceServices'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <>
      <main className="hidden md:grid place-items-center w-full min-h-screen text-2xl font-medium">
        <div>Mobile View is only Available</div>
      </main>

      <main className="md:hidden block">
        <Navbar />
        <Description />
        <MedicalServices />
        <InsuranceServices />
        <BottomNav />
      </main>
    </>
  )
}

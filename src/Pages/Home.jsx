import { DietasEspeciales } from '../Components/DietasEspeciales'
import { EspecialidadInfo } from '../Components/EspecialidadInfo'
import { Footer } from '../Components/Footer'
import { PresentationContent } from '../Components/PresentationContent'

export function Home() {
  return (
    <>
      <PresentationContent />
      <EspecialidadInfo />
      <DietasEspeciales />
      <Footer />
    </>
  )
}

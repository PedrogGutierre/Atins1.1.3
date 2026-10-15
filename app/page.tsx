import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { ExperiencePreview } from "@/components/experience-preview"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <ExperiencePreview/>
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}

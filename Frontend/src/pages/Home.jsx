
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import Hero1 from "../components/Hero1"
import Features1 from "../components/Features1"
import Banner1 from "../components/Banner1"
import Features2 from "../components/Features2"
import About from "../components/About"
import ContactUs from "../components/ContactUs"


function Home() {
  return (
    <>
    <Navbar/>
    <Hero1/>
    <Features1/>
    <Banner1/>
    <Features2/>
    <About/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home
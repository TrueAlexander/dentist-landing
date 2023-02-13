import Home from '@/components/home/Home.js'
import Header from '@/components/header/Header.js'
import About from '@/components/about/About.js'
import Qualifications from '@/components/qualifications/Qualifications'
import Services from '@/components/services/Services'
import Office from '@/components/office/Office'
import Opinions from '@/components/opinions/Opinions'
import Ask from '@/components/ask/Ask'
import Footer from '@/components/footer/Footer'
import WhatsappIcon from '@/components/whatsappIcon/WhatsappIcon'

// import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Office/>
      <Qualifications/>
      <Opinions/>
      <Ask/>
      <Footer/>
      <WhatsappIcon/>
    </>
  )
}

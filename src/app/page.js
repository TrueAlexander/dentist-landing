import Image from 'next/image'
import Home from '@/components/home/Home.js'
import Header from '@/components/header/Header.js'
import WhatsappIcon from '@/components/whatsappIcon/WhatsappIcon'
// import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <Header/>
      <Home/>
      <WhatsappIcon/>
    </>
  )
}

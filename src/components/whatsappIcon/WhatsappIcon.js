import Image from 'next/image'
import './WhatsappIcon.scss'
import 'animate.css'


const WhatsappIcon = () => {
  return (
    <div className="whatsapp animate__delay-10s animate__animated animate__pulse animate__slow animate__infinite" title="Fale conosco">
      <a href="https://wa.me/5521967261434">
        <Image
          src="/whatsapp.png"
          alt="fale conosco"
          width={50}
          height={50}
        />
      </a>
    </div>
  )
}

export default WhatsappIcon
'use client'
import './Opinions.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Opinions = () => {
  return (
    <section className="opinions section" id="opinions">
      <h2 data-heading="Depoimentos" class="section__title">Opiniões de clientes</h2>
      <div className="container">
        <Swiper
        className="slider"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
    
          720: {
            slidesPerView: 2,
          },
    
          1100: {
            slidesPerView: 3,
          }
        }}
        loop={true}
        navigation
        pagination={{ clickable: true, dynamicBullets: true, }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Parceria é a palavra chave para falar de Sasha Abreu Imóveis. A tranquilidade de ter meus imóveis administrados por ela não tem preço"
            </p>
            <p className="bold">
            José Rocha - Proprietário
            </p>
          </div>  
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Minha estadia no Rio de Janeiro, foi algo maravilhoso. Surpreendente foi o imóvel da Sasha. Tudo perfeito ! Voltaremos!"
            </p>
            <p className="bold">
              Ana Pinho - Temporada
            </p>
          </div>    
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Compramos nosso primeiro apartamento com Sasha. Não tivemos nenhum problema. Atendimento Impecável"
            </p>
            <p className="bold">
              Vania Lopes - Compra
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Parceria é a palavra chave para falar de Sasha Abreu Imóveis. A tranquilidade de ter meus imóveis administrados por ela não tem preço"
            </p>
            <p className="bold">
              José Rocha - Proprietário
            </p>
          </div>  
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Minha estadia no Rio de Janeiro, foi algo maravilhoso. Surpreendente foi o imóvel da Sasha. Tudo perfeito ! Voltaremos!"
            </p>
            <p className="bold">
              Ana Pinho - Temporada
            </p>
          </div>    
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Compramos nosso primeiro apartamento com Sasha. Não tivemos nenhum problema. Atendimento Impecável"
            </p>
            <p className="bold">
              Vania Lopes - Compra
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </section>

  )
}

export default Opinions

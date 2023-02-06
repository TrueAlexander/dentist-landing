import Image from 'next/image'

const Home = () => {
  return (
    <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__social">
                    <span className="home__social-follow">Follow Me</span>
                    <div className="home__social-links">
                        <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" className="home__social-link">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>
                <Image
                  src="/dentist.png"
                  alt="odontologo no rj"
                  width={600}
                  height={700}
                />
                <img src="assets/img/home-img.png" alt="" className="home__img"/>
                <div className="home__data">
                    <h1 className="home__title">Olá, sou Maria Carvalho da Sousa</h1>
                    <h3 className="home__subtitle">Odontólogo Universal</h3>
                    <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisci delectus quaerat non corporis necessitatibus ut eaque molestias voluptatem aperiam, reiciendis fuga distinctio.</p>
                    <a href="#about" className="button">
                        <i className="uil uil-user button__icon"></i>
                        More About Me
                    </a>
                </div>
                <div className="my__info">
                    <div className="info__item">
                        <i className="uil uil-facebook-messenger info__icon"></i>
                        <div>
                            <h3 className="info__title">Messenger</h3>
                            <span className="info__subtitle">user.fb1213</span>
                        </div>
                    </div>
                    <div className="info__item">
                        <i className="uil uil-whatsapp info__icon"></i>
                        <div>
                            <h3 className="info__title">Whatsapp</h3>
                            <span className="info__subtitle">21-25-1563</span>
                        </div>
                    </div>
                    <div className="info__item">
                        <i className="uil uil-envelope-edit info__icon"></i>
                        <div>
                            <h3 className="info__title">Email</h3>
                            <span className="info__subtitle">example@example.com</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Home

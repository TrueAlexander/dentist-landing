import Image from "next/image";
import { RxPerson } from "react-icons/rx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <span className="home__img">
          <Image
            src="/home-img.png"
            alt="odontologo no rj"
            width={600}
            height={700}
          />
        </span>
        <div className="home__data">
          <h1 className="home__title">Olá, sou Maria Ana da Sousa</h1>
          <h3 className="home__subtitle">Odontólogo Universal</h3>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur, adipisci delectus quaerat
            non corporis necessitatibus ut eaque molestias voluptatem aperiam,
            reiciendis fuga distinctio.
          </p>
          <a href="#about" className="button">
            <RxPerson className="button__icon" />
            Mais Sobre Mim
          </a>
        </div>
        <div className="my__info">
          <div className="info__item">
            <AiOutlineWhatsApp className="info__icon" />
            <div>
              <h3 className="info__title">Whatsapp</h3>
              <span className="info__subtitle">21-25-1563</span>
            </div>
          </div>
          <div className="info__item">
            <AiOutlineInstagram className="info__icon" />
            <div>
              <h3 className="info__title">Instagram</h3>
              <span className="info__subtitle">@odontoMariaRJ</span>
            </div>
          </div>
          <div className="info__item">
            <MdOutlineEmail className="info__icon" />
            <div>
              <h3 className="info__title">Email</h3>
              <span className="info__subtitle">example@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

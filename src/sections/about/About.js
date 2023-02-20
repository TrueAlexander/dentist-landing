

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 data-heading="My Intro" className="section__title">Sobre Mim</h2>

      <div className="about__container container grid">
          {/* <img src="assets/img/about-img.jpg" alt="" class="about__img"> */}

          <div className="about__data">
              <h3 className="about__heading">
                  Hi, I'm Mariam Wallas, based in Canada
              </h3>
              <p className="about__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus reiciendis, sequi dolor, voluptas doloribus esse asperiores velit eos molestias sit sint eius! Ullam omnis aliquid quibusdam ipsum nisi culpa.
              </p>
              <div className="about__info grid">
                  <div className="about__box">
                      <i className="uil uil-award about__icon"></i>
                      <h3 className="about__title">Experience</h3>
                      <span className="about__subtitle">8 + Years</span>
                  </div>

                  <div className="about__box">
                      <i className="uil uil-suitcase-alt about__icon"></i>
                      <h3 className="about__title">Completed</h3>
                      <span className="about__subtitle">48 + Projects</span>
                  </div>

                  <div className="about__box">
                      <i className="uil uil-headphones-alt about__icon"></i>
                      <h3 className="about__title">Support</h3>
                      <span className="about__subtitle">Online 24/7</span>
                  </div>
              </div>
              <a href="#contact" className="button"><i class="uil uil-navigator button__icon"></i>
                  Contact Me
              </a>
          </div>
      </div>
    </section>
  )
}

export default About

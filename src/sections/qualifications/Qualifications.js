

const Qualifications = () => {
  return (
    <section class="qualification section">
      <h2 data-heading="My Journey" class="section__title">Qualification</h2>
      <div class="qualification__container container grid">
          <div class="education">
              <h3 class="qualification__title">
                  <i class="uil uil-graduation-cap"></i> Education
              </h3>
              <div class="timeline">
                  <div class="timeline__item">
                      <div class="circle__dot"></div>
                      <h3 class="timeline__title">XYZ University (London, UK)</h3>
                      <p class="timeline__text">BFA in Graphic Design</p>
                      <span class="timeline__date">
                          <i class="uil uil-calendar-alt"></i>
                          2011 - 2013
                      </span>
                  </div>

                  <div class="timeline__item">
                      <div class="circle__dot"></div>
                      <h3 class="timeline__title">ABC University (Birmingham, UK)</h3>
                      <p class="timeline__text">Diploma in Web Design</p>
                      <span class="timeline__date">
                          <i class="uil uil-calendar-alt"></i>
                          2013 - 2015
                      </span>
                  </div>

                  <div class="timeline__item">
                      <div class="circle__dot"></div>
                      <h3 class="timeline__title">KLM University (Oxford, UK)</h3>
                      <p class="timeline__text">BS in Web Development</p>
                      <span class="timeline__date">
                          <i class="uil uil-calendar-alt"></i>
                          2013 - 2017
                      </span>
                  </div>
              </div>
          </div>

          <div class="experience">
              <h3 class="qualification__title">
                  <i class="uil uil-suitcase"></i> Experience
              </h3>
              <div class="timeline">
                  <div class="timeline__item">
                      <div class="circle__dot"></div>
                      <h3 class="timeline__title">Copalopa Inc.</h3>
                      <p class="timeline__text">Lead UX Designer</p>
                      <span class="timeline__date">
                          <i class="uil uil-calendar-alt"></i>
                          2018 - Present
                      </span>
                  </div>

                  <div class="timeline__item">
                      <div class="circle__dot"></div>
                      <h3 class="timeline__title">Gagoble Inc</h3>
                      <p class="timeline__text">Web Site Designer</p>
                      <span class="timeline__date">
                          <i class="uil uil-calendar-alt"></i>
                          2013 - 2018
                      </span>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Qualifications

import AboutBen from "../../assets/img/ben-coffee-shop.jpg"
import {Link, useHistory} from "react-router-dom"
import {getYearsSinceDate} from "../../helpers/dates"
import './index.css'

const About = () => {
  const history = useHistory()
  const myAge = getYearsSinceDate(10, 5, 1999, new Date())

  const onCardClick = () => {
    history.push("/Contact")
  }

  return (
      <section className={"about section"}>
        <h2 className={"section-title"}>About</h2>

        <div className={"about-container body"}>
          <div className={"about-img-container"} onClick={onCardClick}>
            <div className={'about-img-card'}>
              <img src={AboutBen} alt={"Ben in coffee shop"} className={'about-img-card-front'}/>
              <div className={'about-img-card-back'}>
                <span className={'about-img-card-back-text'}>Get in touch!</span>
                <i className={'fas fa-envelope about-img-card-back-icon'}/>
              </div>
            </div>
          </div>

          <div>
            <h2 className="about-subtitle">I'm Ben</h2>
            <p className="about-text">
              I am a {myAge}-year-old software engineer based in Worcestershire, UK, with skills in React ⚛️, React
              Native 📱, JavaScript, Cypress, Jest, MySQL, Java ☕, Spring Boot 🌱 and more. I studied at the
              University of Birmingham Coding Boot Camp and most recently worked as a Software Engineer for Clarity
              Software Group. I spend most of my downtime exploring my love of film 🍿 and music 🎧. My passion for
              these arts has led me to develop a love of physical media as well, with my Blu-ray and record
              collections ever expanding. These passions occasionally seep into my coding, which you may see on
              my <Link to={'/Projects'} className={'projects-link'}>projects</Link> page.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About

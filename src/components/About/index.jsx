import AboutBen from "../../assets/img/ben-coffee-shop.jpg"
import {getYearsSinceDate} from "../../helpers/dates"
import './index.css'

const About = () => {
  const myAge = getYearsSinceDate(10, 5, 1999, new Date())

  return (
      <section className={"about section"} id={"about"}>
        {/*TODO: convert css in all files to scss (or whatever the best modern styling tool is)*/}
        <h2 className={"section-title"}>About</h2>

        <div className={"about-container body"}>
          <div className={"about-img-container"}>
            <img src={AboutBen} alt={"Ben in coffee shop"} className={'about-img-content'}/>
          </div>

          <div>
            <h2 className="about-subtitle">I'm Ben</h2>
            <p className="about-text">
              I am a {myAge}-year-old software engineer based in Worcestershire, UK, with skills in React ⚛️, React
              Native 📱, JavaScript, Cypress, Jest, MySQL, Java ☕, Spring Boot 🌱 and more. I studied at the
              University of Birmingham Coding Boot Camp and most recently worked as a Software Engineer for Clarity
              Software Group. I spend most of my downtime exploring my love of film 🍿 and music 🎧. My passion for
              these arts has led me to develop a love of physical media as well, with my Blu-ray and record
              collections ever expanding. These passions occasionally seep into my coding, which you may see on my
              projects page.
              {/*TODO: link the word 'projects' to the projects page*/}
            </p>
          </div>
        </div>
      </section>
  )
}

export default About

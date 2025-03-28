import CV from "../../assets/pdf/BenPauley_CV.pdf"
import BenGreenBg from "../../assets/img/clarityShot-greenBg.png"
import BenOrangeBg from "../../assets/img/clarityShot-orangeBg.png"
import {useHistory} from "react-router-dom"
import "./index.css"

const Home = () => {
  const history = useHistory()

  const getIntroSection = () => {
    return (
        <div className="home-left-content">
          <h1 className="home-intro-title">
            Hi, I'm <span className="home-intro-title-highlighted">Ben</span>,
            <br/>
            a Software Engineer
          </h1>
          <div className={'home-intro-buttons'}>
            {getCVButton()}
            {getSocialsButtons()}
          </div>
        </div>
    )
  }

  const getCVButton = () => {
    return (
        <div className={'home-intro-button-container'}>
          <a
              href={CV}
              target="_blank"
              rel="noreferrer noopener"
              className={"cv-button button"}
          >
            <span className={'cv-button-text'}>Check out my CV</span>
          </a>
        </div>
    )
  }

  const getSocialsButtons = () => {
    return (
        <div className="home-intro-socials">
          <a
              href="https://github.com/ben-pauley"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
              href="https://www.linkedin.com/in/ben-pauley-dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
    )
  }

  const getImageSection = () => {


    return (
        <div className={"home-right-content"}>
          <div className={"home-img-container"}>
            <img
                src={BenGreenBg}
                alt={"Ben profile"}
                className={'home-img-content home-img-content-green'}
                onClick={() => history.push("/About")}/>
            <img
                src={BenOrangeBg}
                alt={"Ben profile"}
                className={'home-img-content home-img-content-orange'}
                onClick={() => history.push("/About")}
            />
          </div>
        </div>
    )
  }

  return (
      <section className="home body">
        {getIntroSection()}
        {getImageSection()}
      </section>
  );
};

export default Home;

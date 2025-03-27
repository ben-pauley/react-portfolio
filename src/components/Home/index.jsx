import CV from "../../assets/pdf/BenPauley_CV.pdf"
import Ben from "../../assets/img/benCropped4.png"

const Home = () => {
  return (
      <section className="home body" id="home">
        <div className="home-data">
          <h1 className="home-title">
            Hi, I'm <span className="home-title-color">Ben</span>,
            <br/>
            a Software Engineer
          </h1>

          <a
              href={CV}
              // TODO: replace with updated CV once CV is updated
              target="_blank"
              rel="noreferrer noopener"
              className="button"
          >
            View CV
          </a>
        </div>

        <div className="home-social">
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

        <div className="home-img">
          <img src={Ben} alt="ben"/>
          {/*TODO: replace with newer profile pic*/}
        </div>
      </section>
  );
};

export default Home;

const Footer = () => {
  return (
    <footer className={"footer"}>
      <p className={"footer-title"}>Ben Pauley</p>

      <p className={'footer-contact-details'}>pauleybj@gmail.com</p>

      <div className={"footer-social"}>
        <a
          href="https://github.com/ben-pauley"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-icon"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ben-pauley-dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-icon"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

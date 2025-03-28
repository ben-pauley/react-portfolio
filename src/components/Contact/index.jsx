import './index.css'

const Contact = () => {
  return (
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact-container body">
          <form action="" className="contact-form">
            <input type="text" placeholder="Name" className="contact-input"/>
            <input type="mail" placeholder="Email" className="contact-input"/>
            {/*TODO: add actual email functionality to this form*/}
            <textarea cols="0" rows="10" className="contact-input"></textarea>
            <input
                type="button"
                value="Send"
                className={"contact-button button"}
            />
          </form>
        </div>
      </section>
  )
}

export default Contact

import React, {useRef} from "react"
import NavItems from "../NavItems"
import "./index.css"

const Navbar = () => {
  const toggleRef = useRef()
  const menuRef = useRef()

  return (
      <nav className="nav body">
        <div>
          <a href="#Home" className="nav-header">
            Ben Pauley
          </a>
        </div>

        <NavItems
            links={["Home", "About", "Projects", "Contact"]}
            toggle={menuRef}
        />

        <div className={"nav-toggle"} ref={toggleRef}>
          <i
              className="bx bx-menu"
              onClick={() => {
                menuRef.current.classList.toggle("show")
              }}
          ></i>
        </div>
      </nav>
  )
}

export default Navbar

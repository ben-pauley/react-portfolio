import {useState} from "react"
import "./index.css"

const NavItems = (props) => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
  })

  function toggleActive(index) {
    changeState({...appState, activeObject: appState.objects[index]})
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "nav-link active"
    } else {
      return "nav-link"
    }
  }

  // TODO: add underline animation to nav items in desktop and mobile views

  return (
      <div className={"nav-menu"} ref={props.toggle}>
        <ul className="nav-list">
          {appState.objects.map((elements, index) => (
              <li className="nav-item" key={index}>
                <a
                    href={`#${props.links[index]}`}
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                      toggleActive(index);
                      props.toggle.current.classList.toggle("show");
                    }}
                >
                  {props.links[index]}
                </a>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default NavItems

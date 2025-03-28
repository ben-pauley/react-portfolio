import "./App.css"
import {HashRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// TODO: upgrade to newer or latest react version
function App() {
  return (
      <HashRouter>
        <div className="App">
          <Header/>
          <main>
            <Switch>
              <Route path="/Home" exact component={Home}/>
              <Route path="/" exact component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Projects" component={Projects}/>
              <Route path="/Contact" component={Contact}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </HashRouter>
  )
}

export default App

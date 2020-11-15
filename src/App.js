import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, NavLink , Route, Switch} from 'react-router-dom'
import { render } from 'react-dom';


const Home = () => <h1>This is main page!</h1>

const News = () => {
  return(
    <div>
<h1>News and information!</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae veniam sunt alias magni quidem molestiae a nesciunt maxime, sint harum, repellat iure, illo tempora numquam optio possimus unde nobis voluptatibus.</p>
  </div>
  )
}

const Contact = () => {
  return(
    <div className="main">
<h1>Contact:</h1>
<p><strong>email:  </strong> reactdeveloper@co.uk</p>
</div>
  )
}

const ErrorPage = () => {
  return (
  <h1>strona nie istnieje</h1>
  )
}

class App extends Component {
  render() {
  return (
    <Router >
    <div>
   <header>
     <nav>
       <ul>
         {/* <li><a href="/">Start</a></li>
         <li><a href="/news">Aktualnosci</a></li>
         <li><a href="/contact">kontakt</a></li> */}
         <li><NavLink to="/" exact activeClassName="home_selected">Start</NavLink></li>
         <li><NavLink to="/news" activeClassName="news_selected">Newsy</NavLink></li>
         <li><NavLink to="/contact" activeClassName="contact_selected">Contact</NavLink></li>
         
         
       </ul>
     </nav>
   </header>
   <section>
     <Switch>
    <Route path="/" exact  component = {Home}/>
    <Route path="/news" component = {News}/>
    <Route path="/contact" component = {Contact}/>
    <Route component = {ErrorPage} />
    </Switch>
   </section>
    </div>
    </Router>
  );
  }
}

export default App;

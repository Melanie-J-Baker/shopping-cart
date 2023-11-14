import Nav from '../Nav/Nav'
import './Home.css'

function Home() {

  return (
    <div id="home">
      <Nav />
      <div className="welcome-wrapper">
        <img src="/src/assets/images/dummy.jpg" className="welcome-img"/>
        <div className="welcome-txt">Welcome to All Tech!</div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Home

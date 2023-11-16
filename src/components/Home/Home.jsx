import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
  return (
    <div id="home">
      <Nav />
      <div className="welcome-wrapper">
        <div className="welcome-text">Welcome to<br></br>All Tech</div>
      </div>
      <p className="home-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="home-images">
        <img className="image" src="/src/assets/images/image1.jpg" alt="electronics" />
        <img className="image" src="/src/assets/images/image2.jpg" alt="electronics" />
        <img className="image" src="/src/assets/images/image3.jpg" alt="electronics" />
      </div>
      <Footer />
    </div>
  )
}

export default Home

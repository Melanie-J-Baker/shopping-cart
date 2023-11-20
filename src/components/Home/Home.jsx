import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './Home.css'
import image1 from '/src/assets/images/image1.jpg';
import image2 from '/src/assets/images/image2.jpg';
import image3 from '/dist/assets/images/image3.jpg';

function Home() {
  return (
    <div id="home">
      <Nav />
      <div className="welcome-wrapper">
        <p className="welcome-text">Welcome to All Tech</p>
      </div>
      <p className="home-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="home-images">
        <img className="image" src={image1} alt="electronics" />
        <img className="image" src={image2} alt="tech" />
        <img className="image" src={image3} alt="gadgets" />
      </div>
      <Footer />
    </div>
  )
}

export default Home

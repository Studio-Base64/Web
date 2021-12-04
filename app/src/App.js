import logo from './assets/images/StudioBase64.svg';
import hbarLogo from './assets/images/HBAR.png';
import ho001 from './assets/nfts/001.webm';
import ho002 from './assets/nfts/002.webm';
import ho003 from './assets/nfts/003.webm';
import ho004 from './assets/nfts/004.webm';
import ho005 from './assets/nfts/005.webm';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-header">
          <div className="studio-text">Studio</div>
          <img src={logo} className="Base64-logo" alt="logo" />
      </header>
      <div className="main-content">
          <div className="inner-content">
            <div className="container">
              <div className="row">
                <h2 className="projects col-md-12">
                  <img className="hbar-logo" src={hbarLogo} alt="HBAR" /> <span className="wallet-address">0.0.591698</span>
                </h2>
                <hr></hr>
                <h6 className="notice">Please email <span className="email-text">buy@studiobase64.com</span> to submit a purchase request for any asset listed below.</h6>
              </div>
              <div className="row">
                <Project
                  title="Hash Orb #001"
                  series="Legacy Series"
                  seriesColor="#0b3c49"
                  price="280"
                  quantity="50"
                  currency="HBAR"
                  src={ho001}
                ></Project>
                <Project
                  title="Hash Orb #002"
                  series="Legacy Series"
                  seriesColor="#0b3c49"
                  price="1000"
                  quantity="3"
                  currency="HBAR"
                  src={ho002}
                ></Project>
                <Project
                  title="Hash Orb #003"
                  series="Hedera v. The World"
                  seriesColor="#25736b"
                  price="460"
                  quantity="5"
                  currency="HBAR"
                  src={ho003}
                ></Project>
              </div>
              <div className="row">
                <Project
                  title="Hash Orb #004"
                  series="2 The Moon Series"
                  seriesColor="Purple"
                  price="800"
                  quantity="1"
                  currency="HBAR"
                  src={ho004}
                ></Project>
                <Project
                  title="Hash Orb #005"
                  series="Sour Candy"
                  seriesColor="#f72585"
                  price="180"
                  quantity="80"
                  currency="HBAR"
                  src={ho005}
                ></Project>
              </div>
            </div>
          </div>
      </div>
      <br/>
    </div>
  );
}

export default App;

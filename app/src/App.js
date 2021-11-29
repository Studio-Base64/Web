import logo from './assets/images/StudioBase64.svg';
import hashOrbs from './assets/images/Hash-Orbs-001-Final.gif';
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
            <h2 className="projects">Projects</h2>

            <div className="container">
              <div className="row">
                <div className="project-container col-md-4">
                  <div className="row">
                    <h3>Hedera Hash Orbs</h3>
                  </div>
                  <div className="row">
                    <img src={hashOrbs} className="hash-orbs" alt="hash-orbs" />
                  </div>
                </div>

                <div className="project-container col-md-4">
                  <div className="row">
                    <h3>Hedera Hash Orbs</h3>
                  </div>
                  <div className="row">
                    <img src={hashOrbs} className="hash-orbs" alt="hash-orbs" />
                  </div>
                </div>

                <div className="project-container col-md-4">
                  <div className="row">
                    <h3>Hedera Hash Orbs</h3>
                  </div>
                  <div className="row">
                    <img src={hashOrbs} className="hash-orbs" alt="hash-orbs" />
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;

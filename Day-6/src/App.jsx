import React from 'react';
import './App.jsx'

function App() {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card-d">
          <div className="card">
            <div className="top">
              <img src="img1.png" alt="Strawberry Main" />
            </div>
            <div className="card-inside">
              <div className="card">
                <img src="img2.jpg" alt="Strawberry 1" />
              </div>
              <div className="card">
                <img src="img3.jpeg" alt="Strawberry 2" />
              </div>
              <div className="card">
                <img src="img4.jpg" alt="Strawberry 3" />
              </div>
              <div className="card">
                <img src="img5.jpg" alt="Strawberry 4" />
              </div>
            </div>
          </div>
          </div>
          
          <div className="right-card">
            <div className="components">
              <div className="title">
                <h3>DELICIOUS STRAWBERRY</h3>
                <span className="light-grey-shade">COD:2025</span>
              </div>
              <div className="cost">
                RS. <span style={{ color: "#a71d31", fontWeight: "bold", fontSize: "2rem" }}>675</span>
              </div>
              <p className="light-grey-shade">SELECT A COLOR</p>
              <div className="card-inside">
              <div className="card">
                <img src="img2.jpg" alt="Strawberry 1" />
              </div>
              <div className="card">
                <img src="img3.jpeg" alt="Strawberry 2" />
              </div>
              <div className="card">
                <img src="img4.jpg" alt="Strawberry 3" />
              </div>
              <div className="card">
                <img src="img5.jpg" alt="Strawberry 4" />
              </div>
            </div>
              <p className="light-grey-shade">BENEFITS</p>
              <ul>
                <li>
                  <p>Low in calories compared to other fruits.</p>
                </li>
                <li>
                  <p>Could help prevent inflammatory conditions, like heart disease.</p>
                </li>
                <li>
                  <p>
                    A source of heart-friendly nutrients which may help
                    manage blood pressure
                  </p>
                </li>
                <li>
                  <p>
                    Slow down digestion of glucose
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

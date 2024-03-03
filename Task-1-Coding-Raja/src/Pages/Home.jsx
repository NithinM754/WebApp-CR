import React, { useState, useEffect } from 'react';
import '../Assets/css/Home.css'
import { Link } from 'react-router-dom';
import Head from '../Assets/css/wired-lineal-17-avatar-man-nodding.gif';
import Write from '../Assets/css/wired-lineal-245-edit-document.gif';
import '../Assets/css/AnimatedNumberCount.css';
function HomePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 2500;
    const animationDuration = 2000;
    const steps = 100;
    const stepSize = targetCount / steps;

    let currentCount = 0;
    let animationFrameId = null;

    const animateCount = () => {
      if (currentCount < targetCount) {
        currentCount += stepSize;
        setCount(currentCount);
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(targetCount);
      }
    };
    animationFrameId = requestAnimationFrame(animateCount);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="homepage">
      <main className="main-content">
        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="intro-message">               
                  <h1>The Perfect page for Student Information Management System<span className="highlight"></span>.</h1>
                  <div className="img-head">
                    <img src={Head} alt="Head" />
                    <p>Imaginagion is the</p>
                    <p>biginning of learning</p>
                  </div> 
                  <div className="animated-number">
                    Over {Math.round(count)}+ Students Registered
                  </div>
                  <h3>Explore your options.</h3>          
                  <ul>
                    <li>Attendance</li>
                    <li>Marks Alloted</li>
                    <li>Behaviour Management</li>
                    <li>Subjects Alloted</li>
                  </ul>
                   
                  <div className="intro-buttons">
                    <Link to="/login" className="btn btn-primary">Get Started ➤</Link>
                  </div> 
                  <div className="img-write">
                    <img src={Write} alt="Write" />
                    <p>Home for Collection of</p>
                    <p>Academics and Records</p>
                  </div>
                  <i className="fa fa-angle-down fa-5x animated infinite pulse arrow-icon"></i>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
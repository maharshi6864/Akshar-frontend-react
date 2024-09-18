import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './Landing.css';
import logo from '../../../../public/herosection/a-1@2x.png';
import modelImage from '../../../../public/herosection/881283d330d1466ca78cfec8c89ded05-1@2x.png';
const Landing = ({ className = '' }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isNavExpanded) {
        setIsNavExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavExpanded]);

  return (
    <div className="w-full">
      <header className="w-full navbar navbar-expand-lg navbar-light sticky-top custom-navbar">
        <div className="container-fluid custom-container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="Akshar Logo"
              className="d-inline-block align-text-top brand-logo"
            />
            <span
              className="font-medium brand-text "
              style={{ color: '#007FFF' }}
            >
              kshar
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse justify-content-end ${
              isNavExpanded ? 'show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQ">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="main-btns d-flex ms-lg-3">
              <button
                className="btn btn-student btn-dark"
                onClick={() => (window.location.href = '/login')}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className={`landing-section ${className}`}>
        <div className="landing-content">
          <div className="text-content">
            <h1 className="main-home-text">Learn, Connect, Grow.</h1>
            <div className="main-home-desc">
              Experience the future of education with Akshar. Our cutting-edge
              technology delivers personalized learning, improved outcomes, and
              a more enjoyable classroom experience.
            </div>
          </div>
          <img
            className="landing-image"
            loading="lazy"
            alt="Education illustration"
            src={modelImage}
          />
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  className: PropTypes.string,
};

export default Landing;

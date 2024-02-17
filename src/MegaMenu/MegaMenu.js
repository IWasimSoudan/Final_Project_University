import React from 'react';
import './style/style.css'; // Make sure to import your CSS file

function MegaMenu() {
  return (
    <div className='test'>
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <input type="radio" name="slide" id="menu_btn" />
        <input type="radio" name="slide" id="cancel_btn" />
        <ul className="nav_links">
          <label htmlFor="cancel_btn" className="btn cancel_btn">
            <i className="fas fa-times"></i>
          </label>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#" className="desktop_item">Dropdown Menu</a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile_item">Dropdown Menu</label>
            <ul className="drop_menu">
              <li><a href="#">Drop Menu 1</a></li>
              <li><a href="#">Drop Menu 2</a></li>
              <li><a href="#">Drop Menu 3</a></li>
              <li><a href="#">Drop Menu 4</a></li>
              <li><a href="#">Drop Menu 5</a></li>
              <li><a href="#">Drop Menu 6</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop_item">Mega Menu</a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile_item">Mega Menu</label>
            <div className="mega_box">
              <div className="content">
                {/* Insert content here */}
                <div className="row img_row">
                  {/* <header>Our Services</header> */}
                  <div className="services_img"></div>
                </div>
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega_links first_links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Ui / Ux</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Product Services</header>
                  <ul className="mega_links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Ui / Ux</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>SEO Services</header>
                  <ul className="mega_links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Ui / Ux</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#">Feedback</a></li>
        </ul>
        <label htmlFor="menu_btn" className="btn menu_btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
    </div>
  );
}

export default MegaMenu;

import './footer.css';
import facebookIcon from '../static/home/facebook.svg';
import instagramIcon from '../static/home/instagram.svg';
import linkedInIcon from '../static/home/linkedin.svg';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-title">
          <h1 className="footer-content-title-text">ECOMMERCE</h1>
          <p className="footer-content-title-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at congue risus. Sed commodo dapibus urna eget malesuada.
            Suspendisse sed lectus ex.
          </p>
          <div className="footer-content-title-social">
            <img src={linkedInIcon} alt="linkedIn" />
            <img src={facebookIcon} alt="facebook" />
            <img src={instagramIcon} alt="instagram" />
          </div>
        </div>
        <div className="footer-content-shop">
          <h2 className="footer-content-shop-title">Shop</h2>
          <ul className="footer-content-shop-list">
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Gaming
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Computer
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Laptop
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Handphone
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Accesories
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-services">
          <h2 className="footer-content-shop-title">Services</h2>
          <ul className="footer-content-shop-list">
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Shop
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Service Device
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Training
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                Bussines
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-contact">
          <h2 className="footer-content-shop-title">Contact</h2>
          <ul className="footer-content-shop-list">
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                +62342342234
              </a>
            </li>
            <li className="footer-content-shop-item">
              <a href="#" className="footer-content-shop-link">
                admin@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-content-copyright">
        <p className="footer-content-copyright-text">
          Copyright 2023. All rights reserved.
        </p>
        <a href="#" className="footer-content-copyright-link">
          Term & Condition
        </a>
      </div>
    </div>
  );
}

export default Footer;

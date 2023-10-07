import React from 'react'
import './Footer.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
const Footer = () => {
  return (
    <div>
      
          <footer>
              <div className='footer-wrapper'>
                  <div>
                      <p>Соц.сети</p>
                      <p>Номер</p>
                  </div>
                  <div>
                      <div className='icons'>
                          <a href=''><img className='logo' src={icon1} alt=''/></a>
                          <a href=''><img className='logo' src={icon2} alt=''/></a>
                      </div>
                      <p>+996 765 34-45-45</p>
                  </div>
              </div>
          </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
const footer = () => {
  return (
    <div className='footer-outer-container'>
     <div className='footer_inner-container'>
      <div className='footer-icons'>
        <FacebookIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
      </div>
      <div className='footer-data'>
         <div>
          <ul>
            <li>Audio Description</li>
            <li>Invester Relation</li>
            <li>Legal Notice</li>
          </ul>
         </div>
         <div>
           <ul>
             <li>Help Creater</li>
             <li>Jobs</li>
             <li>Cookies Preferences</li>
           </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Informatin</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Pravacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
      </div>
      <div className='service-code'>
        <p>Service Code</p>
      </div>
      <div className='copy-write'>
          &copy;1997-2024 Netflix, Inc.
      </div>
     </div>
    </div>
  )
}

export default footer

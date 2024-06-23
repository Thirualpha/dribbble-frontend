import React from 'react'
import dribbble from '../../assets/images/dribbble.jpg'
import './FooterComponent.css'
import { FaTwitter ,FaFacebook ,FaInstagram ,FaPinterestSquare} from "react-icons/fa";


const FooterComponent = () => {
  return (
    <div className='totfoot'>
        <div className='foot1'>
            <div className='imgid'>
                <img src={dribbble} alt='dribbble' ></img>
            
                </div>
                <div className='imgid1'>
            <a className='foota1' href='#'>For designers</a>
            <a className='foota'  href='#'>Hire talent</a>
            <a className='foota'  href='#'>Inspiration</a>
            <a className='foota'  href='#'>Advertising</a>
            <a className='foota'  href='#'>Blog</a>
            <a className='foota'  href='#'>About</a>
            <a className='foota'  href='#'>Careers</a>
            <a className='foota'  href='#'>Support</a>
            <span className='ics0'>
            <FaTwitter className='icns'/>
            <FaFacebook className='icns'/>
            <FaInstagram className='icns'/>
            <FaPinterestSquare className='icns'/>
            </span>
            </div>

        </div>
        <div className='foot2'>
            <span className='foot21'>
                <p>© 2024 Dribbble</p>
                <span className='foot211'>
                <a href='#' className='foot2111'>Terms</a>
                <a href='#' className='foot2111'>Privacy</a>
                <a href='#' className='foot2111'>Cookies</a>
                </span>
            </span>
            <span className='foot22'>
            
            <a href='#' className='foot221'>Jobs</a>
            <a href='#' className='foot221'>Designers</a>
            <a href='#' className='foot221'>Freelancers</a>
            <a href='#' className='foot221'>Tags</a>
            <a href='#' className='foot221'>Places</a>
            <a href='#' className='foot221'>Resources</a>
            </span>
        </div>
        
        </div>
  )
}

export default FooterComponent
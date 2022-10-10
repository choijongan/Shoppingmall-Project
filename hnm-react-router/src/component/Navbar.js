import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <div>
        <div>
            <div class="login-button">
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img 
            width={100}
            src='https://brandlogos.net/wp-content/uploads/2014/10/h-m-logo.png'/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar
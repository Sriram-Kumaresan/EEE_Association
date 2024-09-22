import React from 'react'
import './Sign_in.css'
import usernameLogo from '../../assets/username_vector.webp'
import passwordLogo from '../../assets/password_vector.webp'
// import signinButton from '../../assets/signin_button.webp'
const Sign_in = () => {
  return (
    <>
    <div className='signIn'>
      <div className='signIn_container'>
        <div className='signIn_heading'>
          SIGN IN
        </div>
        <div className='signIn_description'>
          Sign in with email address
        </div>
        <div className='signIn_form'>
          <div className='signIn_input_row'>
            <img src={usernameLogo} alt='username logo' className="username_logo" />
            <input type="email" className='signIn_input ' placeholder='Em@il id'/>
          </div>
          <div className='signIn_input_row'>
            <img src={passwordLogo} alt="password logo" className='password_logo'/>
            <input type="password" className='signIn_input' placeholder='Password'/>
          </div>
        </div>
        <div className='signIn_login_connection'>
          <div className='signIn_to_login'>
            <a href="./Registration">New User</a>
          </div>
          <div className='signIn_forget_password'>
            <a href="/">Forget Password ?</a>
          </div>
        </div>
        <div className='signIn_button'>
          <button className='signIn_btn'>SIGN IN</button>
          {/* <img src={signinButton} alt="" className='signIn_btn'/> */}
        </div>
      </div>
    </div>
    </>
  )
};
export default Sign_in;

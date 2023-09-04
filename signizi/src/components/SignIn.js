import { React,useContext } from 'react';
import './SignIn.css';
import './res/ButtonStyle.css'
import icon_ship_ from './res/icon_ship_.svg';
import InputComponents from './res/InputComponents';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from './res/GlobalState';



function SignIn() {

    const { setIsLoggedIn } = useContext(GlobalStateContext);

    const handleSignInClick = () => {
        setIsLoggedIn(true);
    };

  


  return (
    <div className='SignIn'>
      <div className='MainTitle'>
        <img src={icon_ship_} alt="icon" />
        <p className='TextTitle'>
          Smart Lifeguard
          <br />
          Management
        </p>
      </div>

      <div className='LoginForm'>
        <p className='NotificationSignIn'>Sign in to your account</p>

        <div className='LoginInput'>
          <InputComponents label="Id" placeholder="Enter your id" />
          <InputComponents label="Password" placeholder="Enter your password" />
        </div>

        <div className='ButtonWrapperSignIn'>
            <Link to="/signagelist">
                <button className='ButtonBlueShort' onClick={handleSignInClick}>
                    <p style={{ textDecoration: 'none' }}>Sign in</p>
                </button>    
            </Link>  
        </div>
        <p className='NotificationSignUp'>
          New to Management? Create account
        </p>
        <div className='ButtonWrapperSignUp'>
        <Link to="/signup">
            <button className='ButtonBlueShort'>
                <p style={{ textDecoration: 'none' }}>Sign up</p>
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import './SignUp.css';
import './res/ButtonStyle.css'
import BackgroundLayer from './res/BackgroundLayer';
import InputComponents from './res/InputComponents';
import { Link } from 'react-router-dom';

function SignUp(){
    let category = ['Id', 'Password', 'User name', 'Phone number', 'E-mail'];
    return(
        <BackgroundLayer>
            <div className='SignUp'>
                <p className='BackgroundSubtitle'>Sign Up</p>
                <div className='Horizontal'>
                    <div className='Vertical'>
                        <InputComponents label={category[0]}/>
                        <InputComponents label={category[1]}/>
                        <InputComponents label={category[2]}/>
                    </div>
                    <div className='Vertical'>
                        <InputComponents label={category[3]}/>
                        <InputComponents label={category[4]}/>
                    </div>
                </div>
                <Link to="/">
                    <button className='ButtonBlueLong'>
                        <p style={{ textDecoration: 'none' }}>Create account</p>
                    </button>
                </Link>
            </div>

        </BackgroundLayer>
    );
}



export default SignUp;
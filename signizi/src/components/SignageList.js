import './SignageList.css';
import './res/ButtonStyle.css'
import BackgroundLayer from './res/BackgroundLayer';
import SignageComponents from './res/SignageComponents';
// import SignageSetting from './SignageSetting';
import React, { useState } from 'react';
import CustomModal from './res/CustomModal';


function SignageList(){
    let name = ['Lifeguard 1','Lifeguard 2','Lifeguard 3','Lifeguard 4','Lifeguard 5','Lifeguard 6',];
    let doorState = ['open','closed'];
    let innerState = ['vacant','occupied'];

    
    const [isTsunamiModalOpen, setIsTsunamiModalOpen] = useState(false);

    const openTsunamiModal = () => {
        setIsTsunamiModalOpen(true);
    };
  
    const closeTsunamiModal = () => {
        setIsTsunamiModalOpen(false);
    };


    return (
        <BackgroundLayer>
            <div className='SignageList'>
                <p className='BackgroundSubtitle'>Lifeguard List</p>

                <div className='Horizontal'>
                    <div className='Vertical'>
                        <SignageComponents name={name[0]} doorState={doorState[0]} innerState={innerState[0]}></SignageComponents>
                        <SignageComponents name={name[2]} doorState={doorState[0]} innerState={innerState[1]}></SignageComponents>
                        <SignageComponents name={name[4]} doorState={doorState[0]} innerState={innerState[0]}></SignageComponents>
                    </div>
                    <div className='Vertical'>
                        <SignageComponents name={name[1]} doorState={doorState[0]} innerState={innerState[0]}></SignageComponents>
                        <SignageComponents name={name[3]} doorState={doorState[1]} innerState={innerState[0]}></SignageComponents>
                        <SignageComponents name={name[5]} doorState={doorState[0]} innerState={innerState[0]}></SignageComponents>
                    </div>  
                </div>
                <button className='ButtonRed' onClick={openTsunamiModal}>
                    <p>
                    Tsunami Evacuation Drill
                    </p>
                </button>
                <CustomModal isOpen={isTsunamiModalOpen} onRequestClose={closeTsunamiModal} classname={"TsunamiModal"}>
                        <p className='BackgroundSubtitle'>WARNING!!!</p>
                        <p>
                            An earthquake has been detected.
                            <br/>
                            All signage opening soon.
                        </p>
                        <button className='ButtonBlueShort' onClick={closeTsunamiModal}>back</button>
                </CustomModal>
            </div>
        </BackgroundLayer>
    );
}

export default SignageList;
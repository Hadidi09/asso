import React from 'react';

const Rejoindre = () => {
    return (
        <div className=' text-white w-screen h-screen flex justify-center flex-col items-center'>
            <iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/suffrage/adhesions/rejoindre-suffrage/widget"
                className='w-screen h-screen border-none'
                onload="window.scroll(0, this.offsetTop)">  
            </iframe>

        </div>
    );
};

export default Rejoindre;
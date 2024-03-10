import React from 'react';
import CanvasManipulation from '../CanvasManipulation/CanvasManipulation';

const Section4Home = () => {
    return (
        <div className=' w-full bg-amber-300 py-28 '>

            {/* text=================== */}
            <div className=' grid grid-rows-1 grid-cols-2 w-11/12 mx-auto mb-14'>
                {/* left side text */}
                <div >
                    <h6 className=' text-black font-bold text-xl'>
                        STEP 1
                    </h6>
                    <h1 className=' mb-3 text-4xl font-bold text-black'>Upload regular picture</h1>
                    <article className=' text-gray-800 text-lg font-semibold'>
                        Pebblely automatically removes the background from your images
                    </article>
                </div>


                {/* left side text */}
                <div>
                    <h6 className=' text-black font-bold text-xl'>
                        STEP 2
                    </h6>
                    <h1 className=' mb-3 text-4xl font-bold text-black'>Download beautiful photos</h1>
                    <article className=' text-gray-800 text-lg font-semibold'>
                        Pebblely automatically removes the background from your images
                    </article>
                </div>

            </div>

            <div className=' w-10/12 mx-auto grid grid-rows-1 grid-cols-2 mb-8 shadow-2xl'>

                <CanvasManipulation />
                <div className=' bg-black '>.</div>
            </div>

            <p className=' text-center text-xl text-black'>
                Want to try this with your own images and custom settings?
                <a href="#" className=' underline ms-2'>
                    Sign up now
                </a>
            </p>

        </div>
    );
};

export default Section4Home;
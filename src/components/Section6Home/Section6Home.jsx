import React from 'react';

const Section6Home = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-start mx-auto w-[94vw] mb-60'>

            {/* Left side text ===================== */}
            <div className=' w-full md:w-4/12 pt-3 mb-5 md:mb-0'>

                <h1 className=' font-bold text-5xl text-black mb-6 mt-6 leading-none'>
                    Edit generated images with AI
                </h1>

                <article className=' text-xl leading-9 mb-5'>
                    Pebblely isn't just an AI image generator but more like a design tool.
                </article>

                <a className=" mb-3 hover:translate-x-3 transition-all btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-900 px-6">Get 40 Add multiple products
                </a>

                <a className="mb-3 hover:translate-x-3 transition-all btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-900 px-6">Get 40 Edit generated images
                </a>

                <a className="hover:translate-x-3 transition-all btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-900 px-6">Get 40 Reuse a background
                </a>
            </div>

            {/* Right side image  container*/}
            <div className=' w-full md:w-8/12'>
                <img
                    className=' w-full shadow-lg rounded-md'
                    src="/assets/images/section6.jpg" alt="" />
            </div>

        </div>
    );
};

export default Section6Home;
import React from 'react';

const HeroSection = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-start mx-auto w-[94vw]'>

            {/* Left side text ===================== */}
            <div className=' w-full md:w-4/12 pt-3 mb-5 md:mb-0'>
            <a className=" cursor-pointer text-sm bg-transparent border border-amber-400 hover:bg-amber-400  rounded-3xl text-gray-900 px-6 py-2">Generating Images with your brand colors</a>
              
                <h1 className=' font-bold text-7xl text-black mb-6 mt-6 leading-none'>
                    Beautiful product photos in seconds
                </h1>

                <article className=' text-xl leading-9 mb-5'>
                    Create Instagram-worthy photos for any product with the click of a button
                </article>

                <a className="btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-900 px-6">Get 40 Free photos per every month</a>
            </div>

            {/* Right side image  container*/}
            <div className=' w-full md:w-8/12'>
                <img
                    className=' w-full'
                    src="/assets/images/hero-sample.0ff23dd1.jpg" alt="" />
            </div>

        </div>
    );
};

export default HeroSection;
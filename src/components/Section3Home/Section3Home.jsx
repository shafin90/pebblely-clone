import React from 'react';

const Section3Home = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-start mx-auto w-[92vw] my-44'>


            {/* Left side image  container*/}
            <div className=' w-full md:w-8/12 md:mb-0 mb-5'>
                <img
                    className=' w-full'
                    src="/assets/images/hero-sample.0ff23dd1.jpg" alt="" />
            </div>


            {/* Right side text ===================== */}
            <div className=' w-full md:w-4/12 mb-5 md:mb-0 ps-0 md:ps-10'>


                <h1 className=' font-bold text-5xl text-black mb-6  leading-tight'>
                    Mix it up on your website, email, and social
                </h1>

                <article className=' text-xl leading-9 mb-5'>
                    Don't use the same boring photo across all your marketing channels.
                </article>

                <article className=' text-xl leading-9 mb-5'>
                    Generate multiple product photos in various settings, for different occasions, to grab shoppers' attention.
                </article>


            </div>



        </div>
    );
};

export default Section3Home;
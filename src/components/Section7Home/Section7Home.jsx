import React from 'react';

const Section7Home = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-start mx-auto w-[92vw] my-44'>


            {/* Left side image  container*/}
            <div className=' w-full md:w-8/12 md:mb-0 mb-5'>
                <img
                    className=' w-full'
                    src="/assets/images/section7.jpg" alt="" />
            </div>


            {/* Right side text ===================== */}
            <div className=' w-full md:w-4/12 mb-5 md:mb-0 ps-0 md:ps-10'>


                <h1 className=' font-bold text-5xl text-black mb-12  leading-tight'>
                    Generate AI fashion models
                </h1>

                <article className=' text-xl leading-8 mb-8 text-black'>
                    Get photos of your apparels on different models in different poses and backgrounds
                </article>

                <article className=' text-xl leading-8 mb-12 text-black'>
                    Works best for fashion tops, such as tees, blouses, crop tops, and sleeveless and long-sleeve tops.
                </article>

                <a className="btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-900 px-6">Explore Prebblely Fashion</a>



                <p className=' text-sm text-gray-600 font-semibold mt-4'>
                    Note: Pebblely Fashion is currently a separate product.
                </p>
            </div>



        </div>
    );
};

export default Section7Home;
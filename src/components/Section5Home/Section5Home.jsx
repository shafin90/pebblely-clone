import React from 'react';

const Section5Home = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-start mx-auto w-[92vw] my-44'>


            {/* Left side image  container*/}
            <div className=' w-full md:w-8/12 md:mb-0 mb-5'>
                <img
                    className=' w-full'
                    src="/assets/images/section5.jpg" alt="" />
            </div>


            {/* Right side text ===================== */}
            <div className=' w-full md:w-4/12 mb-5 md:mb-0 ps-0 md:ps-10'>


                <h1 className=' font-bold text-5xl text-black mb-6  leading-tight'>
                    Resize and extend your images to any size
                </h1>

                <article className=' text-xl leading-8 mb-5'>
                    Turn a single generated image into multiple marketing assets.
                </article>

                <article className=' text-xl leading-8 mb-5 text-black'>
                    Instagram stories  <br />
                    Facebook posts <br />
                    Email banners <br />
                    Hero images <br />
                    Ad photos <br />
                    and more. <br />
                </article>

                <article className=' text-xl leading-9 mb-5 text-black'>
                    One image. Multiple pieces of content.
                </article>


            </div>



        </div>
    );
};

export default Section5Home;
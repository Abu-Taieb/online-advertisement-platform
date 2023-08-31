import "./Advertisers.css";

const Advertisers = () => {
    return (
        <div className="py-12 ">
            <div className="text-center p-5">
                <h3 className="font-bold text-orange-500">FOR ADVERTISERS</h3>
                <h1 className="font-extrabold text-4xl text-black pb-4">CHAMPIONING YOUR GOALS</h1>
            </div>
            <div className="flex gap-y-16 flex-col  md:flex-row items-center justify-center md:space-x-8 p-8">
                {/* Card 1 */}
                <div className="custom-card py-5 relative h-60 bg-gradient-to-r from-orange-300 to-pink-500 hover:from-orange-500 hover:to-purple-500">
                    <img className="mx-auto border w-28 h-16 rounded-full absolute -top-8 left-1/2 -translate-x-1/2" src="https://i.ibb.co/8ddnwJW/join1.webp" alt="Card 1" />
                    <p className="mt-4 py-5 text-left font-serif  text-white text-sm md:text-base">Join our platform and let your products shine in the spotlight. With our tailored advertising solutions, you&rsquo;ll reach a diverse audience, driving engagement and sales. Your success story starts here.</p>
                </div>



                {/* Card 2 */}
                <div className="custom-card  relative h-60  bg-gradient-to-r from-orange-300 to-blue-600 hover:from-orange-500 hover:to-purple-500">
                    <img className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2" src="https://i.ibb.co/mtYqFf3/join2.webp" alt="Card 1" />
                    <p className="mt-4  text-left font-serif text-white text-sm md:text-base "> Elevate your business with precision-targeted advertising that leaves a lasting impact. Our platform offers a dynamic stage for your products, connecting you with eager consumers. Seize the opportunity to captivate hearts and minds</p>
                </div>

                {/* Card 3 */}
                <div className="custom-card relative h-60  bg-gradient-to-r from-red-300 to-pink-500 hover:from-green-500 hover:to-yellow-500 ">
                    <img className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2" src="https://i.ibb.co/5jbrLX4/join3.webp" alt="Card 1" />
                    <p className="mt-4 text-left font-serif  text-xs md:text-base text-white">Step into a world of advertising innovation that fosters growth. Our platform transforms your products into captivating stories, weaving connections with potential buyers. Ignite curiosity and turn it into a loyal customer base</p>
                </div>
            </div>
            <div className='text-center pt-2'>
                <button className="bg-gradient-to-r from-orange-300 to-pink-500 hover:from-orange-500 hover:to-tomato-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                    Start your business
                </button>
            </div>
        </div>

       

        
  );
};

export default Advertisers;

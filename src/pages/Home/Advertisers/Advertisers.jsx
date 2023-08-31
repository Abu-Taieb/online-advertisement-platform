import "./Advertisers.css";

const Advertisers = () => {
  return (
    <div className="py-16 ">
      <div className="text-center p-5">
        <h3 className="font-bold text-orange-500 py-5">FOR ADVERTISERS</h3>
        <h1 className="text-4xl font-semibold text-black pb-4">
          CHAMPIONING YOUR GOALS
        </h1>
      </div>
      <div className="flex gap-y-16 flex-col  md:flex-row items-center justify-center md:space-x-8 p-8 my-10">
        {/* Card 1 */}
        <div className="custom-card relative h-60 bg-gradient-to-t from-[#424D98] to-[#0287C5] hover:from-[#0287C5] hover:to-[#424D98]">
          <img
            className="mx-auto border w-28 h-16 rounded-full absolute -top-8 left-1/2 -translate-x-1/2"
            src="https://i.ibb.co/8ddnwJW/join1.webp"
            alt="Card 1"
          />
          <p className="mt-4 py-5 text-left font-serif  text-white text-sm md:text-base">
            Join our platform and let your products shine in the spotlight. With
            our tailored advertising solutions, you&rsquo;ll reach a diverse
            audience, driving engagement and sales.
          </p>
        </div>

        {/* Card 2 */}
        <div className="custom-card  relative h-60  bg-gradient-to-t from-[#424D98] to-[#0287C5] hover:from-[#0287C5] hover:to-[#424D98]">
          <img
            className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2"
            src="https://i.ibb.co/mtYqFf3/join2.webp"
            alt="Card 1"
          />
          <p className="mt-4 py-5 text-left font-serif text-white text-sm md:text-base ">
            {" "}
            Elevate your business with precision-targeted advertising that
            leaves a lasting impact. Our platform offers a dynamic stage for
            your products, connecting you with eager consumers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="custom-card relative h-60 bg-gradient-to-t from-[#424D98] to-[#0287C5] hover:from-[#0287C5] hover:to-[#424D98]">
          <img
            className="mx-auto w-28 h-16 rounded-full absolute -top-8 left-1/2  -translate-x-1/2"
            src="https://i.ibb.co/5jbrLX4/join3.webp"
            alt="Card 1"
          />
          <p className="mt-4 py-5 text-left font-serif  text-xs md:text-base text-white">
            Step into a world of advertising innovation that fosters growth. Our
            platform transforms your products into captivating stories, weaving
            connections with potential buyers.
          </p>
        </div>
      </div>
      <div className="text-center pt-2">
        <button className="bg-gradient-to-r from-[#0287C5] to-[#424D98] hover:from-[#424D98] hover:to-[#0287C5] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">
          Start your business
        </button>
      </div>
    </div>
  );
};

export default Advertisers;

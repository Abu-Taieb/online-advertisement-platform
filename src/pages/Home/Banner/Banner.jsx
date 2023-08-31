import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-48 pb-40 px-8 md:px-16 gap-8 md:gap-12 bg-gradient-to-r from-[#4B57F9] to-[#127BD0] ">
      <Fade left>
      <div className="text-white space-y-3 md:space-y-4">
          <p className="text-lg font-semibold">INTRODUCING SPYRO MARKETING LANDING PAGE THEME</p>
          <h1 className="text-3xl md:text-5xl font-bold py-2"> Build high converting landing pages in <br></br> minutes with spyro</h1>
          <p className='py-6'>Carefully crafted after analyzing the needs of different industries and the design achieves a great balance between purpose & presentation.</p>
          <button className="btn bg-orange-500 text-white border-orange-500 hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white">Purchase Now</button>
      </div>
      </Fade>
      <Fade right>
      <div>
        <img  src="https://i.postimg.cc/PfRRDY4y/spyro-demos-hero.png" alt="Banner Image" />
      </div>
      </Fade>
    </section>
  );
};

export default Banner;

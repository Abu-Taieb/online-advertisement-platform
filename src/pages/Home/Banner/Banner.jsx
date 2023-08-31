import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-48 pb-40 px-8 md:px-16 gap-8 md:gap-12 bg-gradient-to-r from-[#4B57F9] to-[#127BD0] ">
      <Fade left>
      <div className="text-white space-y-3 md:space-y-4">
          <p className="text-lg font-semibold">INTRODUCING SPYRO MARKETING LANDING PAGE THEME</p>
          <h1 className="text-3xl md:text-5xl font-bold"> Build high converting landing pages in <br></br> minutes with spyro</h1>
          <p>Carefully crafted after analyzing the needs of different industries and the design achieves a great balance between purpose & presentation.</p>
          <button className="btn btn-secondary">Purchase Now</button>
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

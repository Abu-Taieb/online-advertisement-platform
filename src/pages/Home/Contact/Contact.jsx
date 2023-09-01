const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-[#424D98] to-[#0287C5] py-20">
      <div className="w-8/12 mx-auto">
        <h2 className="text-left text-4xl font-semibold text-white mb-5">
          Get in touch
        </h2>
      </div>
      <div className=" bg-white rounded-xl p-10 flex gap-10 w-8/12 mx-auto">
        <div className="bg-info w-1/2 border rounded-3xl flex items-center p-10">
          <div className="">
            <div className="text-center">
              <h2 className="text-3xl text-white font-bold border border-b-0 rounded-br-full rounded-bl-full px-5 py-2 shadow-2xl mb-1">
                Welcome!
              </h2>
              <h2 className="text-3xl text-white font-bold border border-t-0 rounded-tr-full rounded-tl-full px-5 py-2 shadow-2xl shadow-[#424D98] ">
                Advertise Now
              </h2>
            </div>
            <p className="text-justify pt-10 text-white">
              If you want to advertise now then you can contact our team. Our
              team contact you as soon as possible.
            </p>
          </div>
        </div>
        <form className="w-1/2 border p-4 rounded-3xl">
          <div className="">
            <label htmlFor="name">Your Name</label>
            <br />
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered input-info w-full"
            />
            <br />
            <br />
            <label htmlFor="email">Your Email</label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered input-info w-full"
            />
            <br />
            <br />
            <label htmlFor="phone">Your Phone</label>
            <br />
            <input
              type="number"
              placeholder="Your phone"
              className="input input-bordered input-info w-full"
            />
            <br />
            <br />
            <label htmlFor="phone">Message</label>
            <br />
            <textarea
              className="textarea textarea-info w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center my-3">
            <button className="btn btn-outline bg-orange-500 border-orange-500 text-white hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white rounded rounded-r-full rounded-l-full px-10">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

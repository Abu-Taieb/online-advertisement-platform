const NewsLetter = () => {
  return (
    <>
      <div
        className={`justify-center bg-no-repeat bg-cover pb-20`}
        style={{
          backgroundImage:
            "url('https://avantage.bold-themes.com/hr/wp-content/uploads/sites/5/2019/04/bgn-newsletter.jpg')",
        }}
      >
        <div className="w-11/12 mx-auto">
          <div className="py-10 text-center px-5">
            <h3 className="font-bold text-orange-500 uppercase">
              Our Newsletter
            </h3>
            <h5 className="text-3xl font-bold">
              KEEP UP TO DATE WITH ADVERTISEMENT
            </h5>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5">
            <div className="">
              <h6 className="font-bold">Hey there!!</h6>
              <h2 className="text-5xl font-bold  text-orange-500">
                Subscribe to
              </h2>
              <h3 className="text-4xl font-bold ">Our Newsletter</h3>
              <p className="my-5 py-5 bg-orange-400 md:bg-transparent rounded-xl px-5 md:px-0">
                Sign up for Advertisement platform newsletter to receive all the
                new offers and discounts regarding the HR projects you might
                have. Simply type in your email address and we will include you
                in our next update.
              </p>
            </div>
            <div className="join">
              <input
                className="input input-bordered border-orange-500 join-item rounded-l-full"
                placeholder="Email"
              />
              <button className="btn join-item text-white hover:text-orange-500 hover:border hover:border-orange-500 rounded-r-full bg-orange-500 hover:bg-white border border-orange-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;

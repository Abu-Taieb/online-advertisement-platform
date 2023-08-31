import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    fetch("https://online-advertisement.vercel.app/feedbacks")
    // fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  const slides = [];
  for (let i = 0; i < feedbacks.length; i += 2) {
    const feedback1 = feedbacks[i];
    const feedback2 = feedbacks[i + 1];
    slides.push(
      <SwiperSlide key={i}>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 md:mx-24 my-16">
          {feedback1 && (
            <div className="text-center bg-gradient-to-b from-black to-indigo-600 p-8 rounded-lg shadow-lg">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-400"
                src={feedback1.img}
                alt=""
              />
              <h3 className="text-3xl text-white">{feedback1.commpanyName}</h3>
              <div className=" mt-2">
                <Rating
                  className="text-yellow-400 mx-auto"
                  style={{ maxWidth: 180 }}
                  value={feedback1.rating}
                  readOnly
                />
              </div>
              <p className="text-white">{feedback1.feedback}</p>
            </div>
          )}
          {feedback2 && (
            <div className="text-center bg-gradient-to-b from-black to-indigo-600 p-8 rounded-lg shadow-lg">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-400"
                src={feedback2.img}
                alt=""
              />
              <h3 className="text-3xl text-white">{feedback2.commpanyName}</h3>
              <div className="mx-auto mt-2">
                <Rating
                  className="text-yellow-400 mx-auto"
                  style={{ maxWidth: 180 }}
                  value={feedback2.rating}
                  readOnly
                />
              </div>
              <p className="text-white">{feedback2.feedback}</p>
            </div>
          )}
        </div>
      </SwiperSlide>
    );
  }

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const commpanyName = form.commpanyName.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
    const img = user.photoURL


    const userFeedback = { commpanyName, email, selectedRating, feedback, img }
    fetch('https://online-advertisement.vercel.app/feedback', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Feedback submitted successfully!");
          form.reset();
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="bg-orange-100">
      <div className="py-20 w-11/12 mx-auto">
        <section>
          <SectionTitle
            subHeading={"what our users say"}
            heading={"Feedback"}
          ></SectionTitle>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {slides}
          </Swiper>
        </section>

        <section className="">
          <div className="flex items-center justify-center mb-10">
            <button
              onClick={() => setShowFeedbackForm(true)}
              className="btn btn-primary "
            >
              {" "}
              feedback
            </button>
          </div>
          {/* Feedback Form */}
          {showFeedbackForm && (
            <div className="flex flex-col items-center ">
              <h2 className="text-2xl font-semibold mb-4">
                Leave Your Feedback
              </h2>

              <form onSubmit={handleFeedbackSubmit} className="w-full max-w-md">
                <div className="grid grid-cols-2 gap-5">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Name{" "}
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="commpanyName"
                      className="mt-1 p-2 w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Rating
                    id="rating"
                    name="rating"
                    className="text-yellow-400 mx-auto"
                    style={{ maxWidth: 180 }}
                    value={selectedRating}
                    onChange={(value) => setSelectedRating(value)} // Update the selected rating
                  />
                </div>
                <ToastContainer></ToastContainer>
                <div className="mb-4">
                  <label
                    htmlFor="feedback"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Feedback
                  </label>
                  <textarea
                    required
                    id="feedback"
                    name="feedback"
                    rows="4"
                    className="mt-1 p-2 w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    placeholder="Your Feedback"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary py-2 px-4 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Feedback;

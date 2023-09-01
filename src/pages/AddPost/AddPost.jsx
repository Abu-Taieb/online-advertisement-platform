import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const day = parseFloat(form.day.value); // Convert to a number
    const night = parseFloat(form.night.value); // Convert to a number
    const price = { day, night }; // Create the price object
    const data = { name, category, price }; // Use the price object
    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/test", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.insertedId) {
        toast.success("Feedback submitted successfully!");
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="pt-20 text-center">
        <ToastContainer></ToastContainer>
        <h2 className="text-3xl font-bold uppercase text-orange-500 text-center">Advertise Here</h2>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-20">
          <input
            type="text"
            name="link"
            placeholder="Photo URL"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Organization name"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Owner name"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Owner email"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="text"
            name="categoryName"
            placeholder="Category name"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price $"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating out of 5"
            className="input input-bordered input-warning w-full"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Organization Location"
            className="input input-bordered input-warning w-full"
            required
          />
          <textarea
            className="textarea textarea-warning textarea-xs"
            name="message"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button className="btn bg-orange-500 text-white border-orange-500 hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white mt-16">Add your Advertisement</button>
      </form>
      </div>
    </div>
  );
};

export default AddPost;

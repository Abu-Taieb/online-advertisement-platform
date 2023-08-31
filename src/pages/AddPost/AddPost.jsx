import { ToastContainer, toast } from "react-toastify";

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
            const response = await fetch('http://localhost:5000/test', {
                method: 'POST',
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
        <div className="pt-40 bg-slate-500 mb-96 pb-40">
            <ToastContainer />
            <h2 className="text-3xl font-bold">Add your first post</h2>
            <form onSubmit={handleSubmit} className="ml-20">
                <label htmlFor="name">Name</label> <br />
                <input type="text" name="name" placeholder="Name" /><br /><br />

                <label htmlFor="category">Category</label> <br />
                <input type="text" name="category" placeholder="Category" /><br /><br />

                <label htmlFor="day">Day price</label> <br />
                <input type="text" name="day" placeholder="Day" /><br /><br />

                <label htmlFor="night">Night price</label> <br />
                <input type="text" name="night" placeholder="Night" /><br /><br />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddPost;

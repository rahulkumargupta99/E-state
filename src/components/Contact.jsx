import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "2296f29b-892c-4721-b88f-360b8c2ab594");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully!");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="text-center p-12 lg:px-32 w-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-gray-800">
        Contact <span className="underline decoration-blue-500">With Us</span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto text-lg">
        Ready to Make a Move? Let's Build Your Future Together.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-gray-700"
      >
        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-1/2 text-left">
            <label className="font-semibold text-gray-800">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded-md py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <label className="font-semibold text-gray-800">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded-md py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          <label className="font-semibold text-gray-800">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-md py-3 px-4 mt-2 h-40 resize-none focus:ring-2 focus:ring-blue-500"
            name="Message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg shadow-md transition-all duration-300">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

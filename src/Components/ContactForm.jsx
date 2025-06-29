import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import supabase from "../config/contactClient";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      enquiry: formData.enquiry,
    };

    try {
      // Step 1: Insert data into Supabase
      // const { data, error } = await supabase
      //   .from("Contact")
      //   .insert([emailData]);

      // if (error) {
      //   console.error("Error inserting data into Supabase:", error);
      //   toast.error("Failed to save data to the database. Please try again.", {
      //     hideProgressBar: true,
      //     className:
      //       "bg-red-100 text-red-700 border border-red-500 rounded-lg shadow-lg p-4",
      //     autoClose: 3000,
      //   });
      //   return; // Exit if Supabase insertion fails
      // }

      // console.log("Data saved to Supabase:", data);

      // Step 2: Send email using EmailJS
      emailjs.init("Yg9-5u6pVdj850AEi"); // Replace with your EmailJS user ID

      emailjs
        .send(
          "service_ex4b0ei", // Replace with your EmailJS service ID
          "template_yv22574", // Replace with your EmailJS template ID
          emailData
        )
        .then(
          (response) => {
            console.log("Email sent successfully", response);
            toast.success("Form submitted successfully!", {
              hideProgressBar: true,
              className:
                "bg-green-100 text-green-700 border border-green-500 rounded-lg shadow-lg p-4",
              autoClose: 3000,
            });
            setFormData({ name: "", email: "", phone: "", enquiry: "" }); // Clear the form
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please try again.", {
              hideProgressBar: true,
              className:
                "bg-red-100 text-red-700 border border-red-500 rounded-lg shadow-lg p-4",
              autoClose: 3000,
            });
          }
        );
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.", {
        hideProgressBar: true,
        className:
          "bg-red-100 text-red-700 border border-red-500 rounded-lg shadow-lg p-4",
        autoClose: 3000,
      });
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 to-green-900 p-6 rounded-lg shadow-2xl w-full max-w-lg"
      >
        <h2 className="sm:text-3xl text-2xl text-green-700 font-semibold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <div className="space-y-">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-xl sm:text-2xl font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl sm:text-2xl text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xl sm:text-2xl text-md font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block  w-full p-3 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Enquiry Input */}
          <div>
            <label
              htmlFor="enquiry"
              className="block text-xl sm:text-2xl text-md font-medium text-gray-700"
            >
              Enquiry
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-xl sm:text-2xl mt-6 p-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit Form
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
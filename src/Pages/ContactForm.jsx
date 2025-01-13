import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">Enquiry</label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;










/*import React from 'react'
import { useState } from 'react'
const ContactForm = () => {
    const [formData , setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    enquiry:""
})

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <h2 className="">Contact Us</h2>
        <div className="">
          <label className="">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange = {handleChange}
            required
          />
          <label className="">Email</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange = {handleChange}
            required
          />
          <label className="">Phone</label>
          <input
            type="number"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label className="">Enquiry</label>
          <input
            type="text"
            id="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          />
        </div>
        <button>Submit form</button>
      </form>
    </div>
  );
}

export default ContactForm*/

import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
    // You can add form submission logic here (e.g., send data to server)
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-lg shadow-md ">
      <h1 className="font-bold text-2xl text-center mb-6">Get In Touch</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Subject"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-center">
            <button
                type="submit"
                className="bg-[#FF6D04] text-white px-10 py-3 text-sm rounded-full"
            >
                SUBMIT
            </button>
        </div>

      </form>
    </div>
  );
};

export default GetInTouch;

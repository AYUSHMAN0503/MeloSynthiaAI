import React, { useState } from 'react';
import { LinearGradient } from 'react-text-gradients';

const ContactUs: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: any = {};

    if (formValues.name.trim() === '') {
      newErrors.name = 'Full name is required';
    }

    if (!validateEmail(formValues.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formValues.subject.trim() === '') {
      newErrors.subject = 'Subject is required';
    }

    if (formValues.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Submit the form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Perform form submission logic here
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="bg-app-bg text-white p-6">
      <h1 className="text-6xl font-bold mb-7 text-center pt-2 bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text">
        Contact Us
      </h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-purple-500"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full rounded-md border-2 border-white bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-purple-500 focus:shadow-md ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-purple-500"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="example@domain.com"
                className={`w-full rounded-md border-2 border-white bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-purple-500 focus:shadow-md ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-purple-500"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formValues.subject}
                onChange={handleInputChange}
                placeholder="Enter your subject"
                className={`w-full rounded-md border-2 border-white bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-purple-500 focus:shadow-md ${
                  errors.subject ? 'border-red-500' : ''
                }`}
              />
              {errors.subject && <p className="text-red-500 mt-2">{errors.subject}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-purple-500"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleInputChange}
                placeholder="Type your message"
                className={`w-full resize-none rounded-md border-2 border-white bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-purple-500 focus:shadow-md ${
                  errors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

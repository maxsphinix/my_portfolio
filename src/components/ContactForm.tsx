import React, { useState } from 'react';


const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('');


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
        const response = await fetch('https://formspree.io/f/movjadkw', { 
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            setFormStatus('success');
            (e.target as HTMLFormElement).reset(); // Clear the form fields
        } else {
            setFormStatus('error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        setFormStatus('error');
    }
};

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
          {formStatus === 'success' && (
            <p className="text-green-500 mt-4">Thank you! Your message has been sent.</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-500 mt-4">Oops! Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

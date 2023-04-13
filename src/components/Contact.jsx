import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12" id='contact'>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            If you have any questions or comments, please email us and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">Email</dt>
              <dd className="mt-2 text-base text-gray-500">
                <a href="mailto:amankumar983540@gmail.com">amankumar983540@gmail.com</a>
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">Address</dt>
              <dd className="mt-2 text-base text-gray-500">
                Asalat Nagar<br />
                Ghaziabad,India
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Privacy Notice</h3>
          <p className="mt-2 text-base text-gray-500">
            We take your privacy seriously. Your personal information will only be used to respond to your inquiry and will not be shared with any third parties.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Copyright</h3>
          <p className="mt-2 text-base text-gray-500">
            Copyright © 2023 Apna Samay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

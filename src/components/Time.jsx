import React from 'react';

export default function MapWithText() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16">
      {/* Left Side - Google Maps */}
      <div className="w-full lg:w-1/2 ">
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95592511531588!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779d46b6f7b13d!2sGoogle!5e0!3m2!1sen!2sus!4v1631020342356!5m2!1sen!2sus"
          className="rounded-lg sm:px-20 "
        ></iframe>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-12 pt-10 lg:pt-0">
     
          <p className=" pb-5 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Hours </p>
        <div className=" pb-10 mt-3 text-center tracking-wide gap-y-1">
          Monday - Thursday, 12pm - 9pm <br/>
          Friday - Saturday, 12pm - 11pm <br/>
          Sunday, Closed

        </div>
      </div>
    </div>
  );
}

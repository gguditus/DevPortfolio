import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/766c455f-25be-4ed1-a3cc-c44c8fcb0ca9"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium border-2 border-stone-400 dark:border-stone-300 text-stone-200 rounded-md bg-gradient-to-r from-blue-400 to-blue-700 drop-shadow-md hover:scale-105 hover:border-stone-600 dark:hover:border-stone-500"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

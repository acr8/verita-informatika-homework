import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ContentDetail() {
  const navigate = useNavigate();
  const { content } = useSelector((state) => state.contentReducer);

  return (
    <div className="ContentDetail h-full w-full">
      <div className="flex justify-center items-center flex-col mt-24 mb-8">
        <div className="container">
          <h1 className="text-4xl text-left pt-4 px-40 text-blue-600">
            {content.title}
          </h1>
          <div className="flex justify-center py-6">
            <img
              className="cardDetailImages shadow-xl rounded-lg"
              src={content.image}
              alt="new"
            />
          </div>
          <div className="flex justify-center items-center px-40 pb-5">
            <p className="text-left font-semibold text-gray-900">
              {content.content}
              <a
                className="text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href={content.link}
              >
                ..See More
              </a>
            </p>
          </div>
          <div className="flex justify-end px-44">
            <button
              onClick={() => {
                navigate("/");
              }}
              class="bg-gray-400 hover:bg-gray-500 duration-300 text-white font-bold py-2 px-7 rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-blue-500 w-full">
        <div className=" flex px-12 py-4 justify-center items-center">
          <div className=" flex justify-center items-center">
            <div className="text-white">
              <h3 className="font-bold text-xl text-left">About Us</h3>
              <p className="py-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas vel mi ut felis
                tempus commodo nec id erat. Suspendisse consectetur dapibus
                velit ut lacinia. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id
                erat. Suspendisse consectetur dapibus velit ut lacinia. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
                mi ut felis tempus commodo nec id erat. Suspendisse consectetur
                dapibus velit ut lacinia.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

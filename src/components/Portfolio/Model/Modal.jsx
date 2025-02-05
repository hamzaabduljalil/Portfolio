import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Slider from "../../Slide/Slider";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-40 bg-model-100 opacity-50"
      onClick={() => {
        props.onConfirm;
      }}
    />
  );
};

const ModalOverlay = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (props.img.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    props.img.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === props.img.length) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${imageSrc}`);
        loadedCount++;
        if (loadedCount === props.img.length) {
          setIsLoaded(true);
        }
      };
    });
  }, [props.img]);

  return (
    <div
      onClick={props.onConfirm}
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-[100%] md:inset-0 h-[calc(100%-1rem)] max-h-full m-auto"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
        {/*  */}
        {isLoaded ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl shadow-sm dark:bg-gray-700 "
          >
            <div className="flex items-center justify-between p-4 pb-1 md:p-[10px_20px] border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3
                className=" 
            text-[20px] font-medium uppercase before:content-[''] before:bg-before-100 before:rounded-l before:block before:h-1 before:w-10.5 before:m-[10px_20px_10px_0]
            "
              >
                {props.title}
              </h3>

              <button
                onClick={props.onConfirm}
                type="button"
                className="text-gray-400 cursor-pointer bg-transparent rounded-lg text-sm w-8s h-8 ms-auto inline-flex justify-center items-center transition duration-300  hoverclose"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            {/*  */}

            <div className=" border border-border-100 rounded-xl  ">
              <Slider
                slides={props.img.map((image, index) => ({
                  content: (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Project Image ${index + 1}`}
                        className="imagemodal"
                      />
                    </div>
                  ),
                }))}
              />
            </div>
            {/*  */}
            <div className="p-4 md:p-5 space-y-1">
              <h3 className="text[18px] font-medium uppercase before:content-[''] before:bg-before-100 before:rounded-l before:block before:h-1 before:w-10.5 before:mb-3.5">
                Description:
              </h3>

              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                {props.description}
              </p>
              <h3 className="text[18px] font-medium uppercase before:content-[''] before:bg-before-100 before:rounded-l before:block before:h-1 before:w-10.5 before:mb-3.5 before:mt-3.5">
                Links:
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                You can find this project on Github:{" "}
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer underline font-medium "
                >
                  Here
                </a>
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                You can find this project live on free hosting:{" "}
                <a
                  href={props.hosting}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer underline font-medium "
                >
                  Here
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center p-[12px_0] bg-card-100  border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={props.onConfirm}
                data-modal-hide="default-modal"
                type="button"
                className="hoverbtn py-2.5 px-5 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  transition-all duration-400"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 bg-white rounded-3xl mt-[50%]">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          github={props.github}
          hosting={props.hosting}
          img={props.img} // ✅ Added missing props
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

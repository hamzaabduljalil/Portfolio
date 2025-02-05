import React, { useState } from "react";
import Card from "./Card";
import { data } from "./data";
import Modal from "./Model/Modal";
import Pagination from "./Pagination";

const Portfolio = ({ checkedList }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const changeHandler = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  const getBgColor = (ln) => {
    switch (ln.toLowerCase()) {
      case "javascript":
        return "bg-yellow-500";
      case "typescript":
        return "bg-blue-600";
      case "react":
        return "bg-cyan-500";
      case "webdesign":
        return "bg-before-200";
      case "css":
        return "bg-indigo-500";
      case "nextjs":
        return "bg-black";
      case "nodejs":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const filteredData = data.filter((item) => {
    if (checkedList.length === 0) return true;
    return item.Language.some((ln) => checkedList.includes(ln));
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredData.length / cardsPerPage);

  return (
    <div>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-3 container">
        {currentCards.map((item, index) => (
          <div key={item.id || index} className="relative">
            {isOpen === item.id && (
              <Modal
                onConfirm={() => changeHandler(item.id)}
                title={item.title}
                img={item.img}
                description={item.Description}
                github={item.github}
                hosting={item.hosting}
              />
            )}

            <Card
              title={item.title}
              summary={item.summary}
              onConfirm={() => changeHandler(item.id)}
              Language={item.Language.map((ln, lnIndex) => (
                <div
                  key={`${item.id}-${lnIndex}`}
                  className={`${getBgColor(
                    ln
                  )} rounded-[25px] w-fit text-[14px] h-[30px] p-[0_12px] leading-8 text-center flex justify-center items-center text-white`}
                >
                  {ln}
                </div>
              ))}
            />
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Portfolio;

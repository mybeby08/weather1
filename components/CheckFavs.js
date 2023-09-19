"use client";
import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import Modal from "./Modal";
function CheckFavs() {
  const [showFavs, setShowFavs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    if (showFavs.length === 0) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };
  useEffect(() => {
    setShowFavs(JSON.parse(localStorage.getItem("favs")) || []);
  }, []);

  return (
    <>
      <HeartIcon
        className="h-12 w-12 text-red-500 hover:text-red-700 right-3 top-3 absolute"
        onClick={() => onClick()}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">Your Favourites:</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Link</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {showFavs.map((fav, key) => (
                  <tbody key={key}>
                    <tr className="hover">
                      <td>{fav.city}</td>
                      <td>
                        <a
                          href={`${fav.link}`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Go to
                        </a>
                      </td>
                      <td>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            const newFavs = showFavs.filter(
                              (f) => f.id !== fav.id
                            );
                            localStorage.setItem(
                              "favs",
                              JSON.stringify(newFavs)
                            );
                            setShowFavs(newFavs);
                            if (newFavs.length === 0) {
                              setIsOpen(false);
                            }
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CheckFavs;

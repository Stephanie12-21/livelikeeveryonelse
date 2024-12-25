import React from "react";

export default function Adds({ direction = "right", onClose }) {
  const animationStyles =
    direction === "right"
      ? {
          animation: "slideInRight 0.5s ease-out forwards",
        }
      : {
          animation: "slideInLeft 0.5s ease-out forwards",
        };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform transition-transform"
        style={animationStyles}
      >
        <p className="text-center text-lg font-semibold text-gray-800">
          Ceci est une publicité
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Fermer
        </button>
      </div>
      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

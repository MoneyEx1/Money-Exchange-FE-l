import React from "react";

const Pagination = ({ current, total, onChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1 || (i <= 3 && current <= 4) || (i >= total - 2 && current >= total - 3)) {
      pageNumbers.push(i);
    } else if (
      (i === 2 && current > 4) ||
      (i === total - 1 && current < total - 3) ||
      (Math.abs(i - current) === 2 && (i === 3 || i === total - 2))
    ) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center mt-6">
      <button
        className="px-3 py-2 border rounded-l bg-white text-gray-600 disabled:opacity-50"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((num, idx) =>
        num === "..." ? (
          <span key={idx} className="px-3 py-2 border-t border-b bg-white text-gray-400">...</span>
        ) : (
          <button
            key={idx}
            className={`px-3 py-2 border-t border-b border-r bg-white ${
              num === current ? "bg-indigo-600 text-white" : "text-gray-700"
            }`}
            onClick={() => onChange(num)}
            disabled={num === current}
          >
            {num}
          </button>
        )
      )}
      <button
        className="px-3 py-2 border rounded-r bg-white text-gray-600 disabled:opacity-50"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
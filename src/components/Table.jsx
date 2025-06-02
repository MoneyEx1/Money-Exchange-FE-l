import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg">
      <table className="min-w-full border rounded-xl">
        <thead>
          <tr className="bg-blue-300">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-8 py-4 text-2xl font-semibold text-center whitespace-nowrap"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="bg-white">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-8 py-4 text-xl text-center font-serif whitespace-nowrap"
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
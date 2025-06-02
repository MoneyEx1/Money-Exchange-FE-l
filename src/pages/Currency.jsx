import React, { useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const currencyData = [
  { country: "Thailand", flag: "🇹🇭", symbol: "THB" },
  { country: "Myanmar", flag: "🇲🇲", symbol: "MMK" },
  // နောက်ထပ် row တွေ ထပ်ထည့်နိုင်သည်
];

const columns = [
  { key: "country", title: "Country" },
  { key: "flag", title: "Flag", render: (flag) => <span style={{ fontSize: "2rem" }}>{flag}</span> },
  { key: "symbol", title: "Symbol" },
  {
    key: "actions",
    title: "Actions",
    render: (value, row, idx) => (
      <div className="flex gap-2 justify-center">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded font-semibold"
          onClick={() => {
            // handle edit logic here
            alert(`Edit ${row.country}`);
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold"
          onClick={() => {
            // handle delete logic here
            alert(`Delete ${row.country}`);
          }}
        >
          Delete
        </button>
      </div>
    ),
  },
];

const Currency = () => {
  const [current, setCurrent] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ country: "", flag: "", symbol: "" });
  const [data, setData] = useState(currencyData);
  const pageSize = 2;
  const total = 10;

  // pagination data slice
  const pagedData = data.slice((current - 1) * pageSize, current * pageSize);

  const columns = [
    { key: "country", title: "Country" },
    { key: "flag", title: "Flag", render: (flag) => <span style={{ fontSize: "2rem" }}>{flag}</span> },
    { key: "symbol", title: "Symbol" },
    {
      key: "actions",
      title: "Actions",
      render: (value, row, idx) => (
        <div className="flex gap-2 justify-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded font-normal"
            onClick={() => {
              setEditIndex(idx + (current - 1) * pageSize);
              setForm({ country: row.country, flag: row.flag, symbol: row.symbol });
              setShowCreateForm(true);
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-normal"
            onClick={() => {
              const delIdx = idx + (current - 1) * pageSize;
              setData(data.filter((_, i) => i !== delIdx));
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit mode
      const newData = [...data];
      newData[editIndex] = { ...form };
      setData(newData);
    } else {
      // Create mode
      setData([...data, { ...form }]);
    }
    setShowCreateForm(false);
    setEditIndex(null);
    setForm({ country: "", flag: "", symbol: "" });
  };

  const handleOpenCreate = () => {
    setEditIndex(null);
    setForm({ country: "", flag: "", symbol: "" });
    setShowCreateForm(true);
  };

  return (
    <>

    
      <div className="min-h-screen flex flex-col justify-start items-center lg:ml-64 bg-gradient-to-br from-sky-200 via-indigo-100 to-purple-200">
        <div className="px-3 flex flex-col gap-3 md:flex-row items-start md:justify-between w-full  mb-8 mt-8">
          <div className="text-black py-4 rounded-2xl text-3xl font-serif font-extrabold">
            Currency
          </div>
          <button
            className="bg-blue-500 max-w-[300px] text-white px-10 py-4 rounded-2xl text-2xl font-serif shadow-lg flex items-center justify-center gap-2"
            onClick={handleOpenCreate}
          >
            <span className="inline-flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" fill="#2563eb"/>
                <path d="M14 9V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 14H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            Create Currency
          </button>
        </div>
        {showCreateForm && (
          <div className="fixed inset-0 z-50 px-3 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => {
                  setShowCreateForm(false);
                  setEditIndex(null);
                  setForm({ country: "", flag: "", symbol: "" });
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-blue-700">
                {editIndex !== null ? "Edit Currency" : "Create Currency"}
              </h2>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-semibold mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleFormChange}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Enter country name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Flag (Emoji)</label>
                  <input
                    type="text"
                    name="flag"
                    value={form.flag}
                    onChange={handleFormChange}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="🇲🇲"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Symbol</label>
                  <input
                    type="text"
                    name="symbol"
                    value={form.symbol}
                    onChange={handleFormChange}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="MMK"
                    required
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    type="button"
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition shadow"
                    onClick={() => {
                      setShowCreateForm(false);
                      setEditIndex(null);
                      setForm({ country: "", flag: "", symbol: "" });
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow"
                  >
                    {editIndex !== null ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="w-full  px-3">
          <Table columns={columns} data={pagedData} />
        </div>
        <Pagination current={current} total={total} onChange={setCurrent} />
      </div>
    </>
  );
};

export default Currency;

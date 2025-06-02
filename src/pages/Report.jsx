import React, { useState, useRef, useEffect } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const currencyData = [
  { income: 3000, outcome: 6000, profit: -3000, currency: "MMK" },
  { income: 5000, outcome: 2000, profit: 3000, currency: "THB" },
  { income: 1000, outcome: 3000, profit: -2000, currency: "USD" },
];

const currencyDataA = [
    {
      date: "24-04-2024",
      name: "Aung Aung",
      income: "3000 (MMK)",
      outcome: "6000(THB)",
      rate: "139.23",
      CustomerSlip: "Slip 1 Image/ Slip 2 Image",
      ownerSlip: "Slip 1 Image/ Slip 2 Image",
      status: "Completed",
      action: "Edit/Delete",
    },
    {
      date: "24-04-2024",
      name: "Mung Mung",
      income: "3000 (MMK)",
      outcome: "6000(THB)",
      rate: "139.23",
      CustomerSlip: "Slip 1 Image/ Slip 2 Image",
      ownerSlip: "Slip 1 Image/ Slip 2 Image",
      status: "You need to sent",
      action: "Edit/Delete",
    },
    {
      date: "24-04-2024",
      name: "Nung Nung",
      income: "3000 (MMK)",
      outcome: "6000(THB)",
      rate: "139.23",
      CustomerSlip: "Slip 1 Image/ Slip 2 Image",
      ownerSlip: "Slip 1 Image/ Slip 2 Image",
      status: "Waiting from Customer",
      action: "Edit/Delete",
    },
  ];

const columnsA = [
    { key: "date", title: "Date" },

    { key: "name", title: "Name" },

    { key: "income", title: "Owner Receive amount  from customer" },
    { key: "outcome", title: "Owner Pay amount to customer" },
    { key: "rate", title: "Rate" },
    { key: "CustomerSlip", title: "Customer Pay Slip" },
    { key: "ownerSlip", title: "Owner Pay Slip" },
    { key: "status", title: "Status" },
    { key: "action", title: "Action" },
  ];

const dropdownOptions = ["Daily", "Between", "Monthly"];

const Report = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState(currencyData);
  const [dataA, setDataA] = useState(currencyDataA);

  const pageSize = 3;
  const total = 10;

  // pagination data slice
  const pagedData = data.slice((current - 1) * pageSize, current * pageSize);
  const pagedDataA = dataA.slice((current - 1) * pageSize, current * pageSize);

  const columns = [
    { key: "income", title: "Owner Receive Amount from Customer" },
    { key: "outcome", title: "Owner Pay Amount to Customer" },
    { key: "profit", title: "Profit" },
    { key: "currency", title: "Currency" },
  ];

  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calendar placeholders
  const renderCalendar = () => {
    if (selected === "Daily") {
      return (
        <div className="ml-4 flex items-center">
          <input
            type="date"
            className="px-4 py-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
        </div>
      );
    }
    if (selected === "Between") {
      return (
        <div className="ml-4 flex items-center gap-2">
          <input
            type="date"
            className="px-4 py-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
          <span className="mx-2 text-gray-500">to</span>
          <input
            type="date"
            className="px-4 py-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
        </div>
      );
    }
    if (selected === "Monthly") {
      return (
        <div className="ml-4 flex items-center">
          <input
            type="month"
            className="px-4 py-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start items-center lg:ml-64 bg-gradient-to-br from-sky-200 via-indigo-100 to-purple-200">
        <div className="px-3 flex flex-col gap-3 md:flex-row items-start md:justify-between w-full mb-8 mt-8">
          <div className="flex flex-col">
            <div className="text-black py-4 rounded-2xl text-3xl font-serif font-extrabold">
              Customer Report
            </div>
            {/* Custom Dropdown and Calendar beside */}
            <div className="flex  flex-col md:flex-row">
              <div className="relative  w-[160px] mt-2" ref={dropdownRef}>
                <button
                  type="button"
                  className="w-full flex  justify-between px-4 py-3 mb-1 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg items-center bg-white"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span
                    className={
                      selected === "Select" ? "text-gray-400" : "text-black"
                    }
                  >
                    {selected}
                  </span>
                  <svg
                    className={`w-6 h-6 ml-2 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-blue-200 z-10">
                    {dropdownOptions.map((option) => (
                      <div
                        key={option}
                        className={`px-6 py-4 cursor-pointer text-xl rounded-2xl ${
                          selected === option
                            ? "bg-gray-100"
                            : "hover:bg-blue-50"
                        }`}
                        onClick={() => {
                          setSelected(option);
                          setDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {renderCalendar()}
            </div>
          </div>
        </div>
        <div className="w-full px-3">
          <Table columns={columns} data={pagedData} />
        </div>
        <Pagination current={current} total={total} onChange={setCurrent} />
        
      <div className="w-full mt-5 px-3">
          <div className="flex  flex-col md:flex-row">
            <div className="relative  w-[160px] mt-2" ref={dropdownRef}>
              <button
                type="button"
                className="w-full flex  justify-between px-4 py-3 mb-1 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg items-center bg-white"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <span
                  className={
                    selected === "Select" ? "text-gray-400" : "text-black"
                  }
                >
                  {selected}
                </span>
                <svg
                  className={`w-6 h-6 ml-2 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-blue-200 z-10">
                  {dropdownOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-6 py-4 cursor-pointer text-xl rounded-2xl ${
                        selected === option ? "bg-gray-100" : "hover:bg-blue-50"
                      }`}
                      onClick={() => {
                        setSelected(option);
                        setDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {renderCalendar()}
          </div>
        </div>
        <div className="flex">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Customer"
              className="w-full  px-4 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Status"
              className="w-full  px-4 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <Table columns={columnsA} data={pagedDataA} />
      </div>
      
      
      
    </>
  );
};

export default Report;





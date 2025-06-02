import React, { useState } from "react";

const customerList = [
  "Search",
  "Aung Aung",
  "Mg Mg",
  "Su Su",
  "Kyaw Kyaw",
  "Mya Mya",
];

const currencyList = [
  { flag: "🇺🇸", code: "USD" },
  { flag: "🇲🇲", code: "MMK" },
  { flag: "🇹🇭", code: "THB" },
  { flag: "🇨🇳", code: "CNY" },
];

const HomeAgents = () => {
  const [customerType, setCustomerType] = useState("new");
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fromDropdown, setFromDropdown] = useState(false);
  const [customerFromDropdown, setCustomerFromDropdown] = useState(false);
  const [customerFromCurrency, setCustomerFromCurrency] = useState(
    currencyList[0]
  );
  const [toDropdown, setToDropdown] = useState(false);
  const [fromCurrency, setFromCurrency] = useState(currencyList[0]);
  const [toCurrency, setToCurrency] = useState(currencyList[1]);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(3604);

  const [fullyDropdownOpen, setFullyDropdownOpen] = useState(false);
  const [fullyType, setFullyType] = useState("Fully");

  const filteredCustomers = customerList.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const [inputType, setInputType] = useState("amount");

  
  const CameraIcon = () => (
    <svg
      className="w-6 h-6 text-indigo-500 hover:text-indigo-700 transition-colors cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex justify-center items-center lg:ml-64 bg-gradient-to-br from-sky-200 via-indigo-100 to-purple-200">
      <div className="w-full lg:max-w-2xl xl:max-w-4xl rounded-3xl border border-slate-200 shadow-xl bg-gradient-to-br from-sky-50 via-indigo-200 to-purple-50  p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-semibold rounded-xl px-6 py-3 text-lg shadow-md">
              For Agents Exchange
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gradient-to-r from-sky-400 to-indigo-400 text-white font-semibold rounded-xl px-6 py-3 text-lg shadow-md">
              28 Aug 2025
            </div>
          </div>
        </div>
        {/* Exchange Rate */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-indigo-400 to-sky-400 rounded-xl px-6 py-2 flex items-center gap-4 shadow-md border border-white/60">
            {/* From Amount & Dropdown */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="w-20 text-center font-bold text-violet-700 bg-white/80 outline-none border-b-2 border-violet-200 focus:border-violet-500 transition"
                style={{ fontSize: "1.15rem" }}
              />
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-2 px-2 py-1 rounded-lg border-2 border-violet-300 bg-white shadow-sm hover:border-violet-500 transition"
                  onClick={() => setFromDropdown((v) => !v)}
                >
                  <span className="text-xl">{fromCurrency.flag}</span>
                  <span className="font-medium text-violet-700">
                    {fromCurrency.code}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-1 text-violet-500 transition-transform duration-200 ${
                      fromDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {fromDropdown && (
                  <div className="absolute left-0 mt-2 w-32 bg-white border border-violet-200 rounded-xl shadow-lg z-30">
                    {currencyList.map((item) => (
                      <div
                        key={item.code}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl hover:bg-violet-50 transition-colors ${
                          fromCurrency.code === item.code ? "bg-violet-100" : ""
                        }`}
                        onClick={() => {
                          setFromCurrency(item);
                          setFromDropdown(false);
                        }}
                      >
                        <span className="text-xl">{item.flag}</span>
                        <span className="font-bold text-violet-700">
                          {item.code}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <span className="text-xl font-bold text-violet-700">=</span>
            {/* To Amount & Dropdown */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="w-28 text-center font-bold text-yellow-600 bg-white/80 outline-none border-b-2 border-yellow-300 focus:border-yellow-500 transition"
                style={{ fontSize: "1.15rem" }}
              />
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-2 px-2 py-1 rounded-lg border-2 border-violet-300 bg-white shadow-sm hover:border-violet-500 transition"
                  onClick={() => setToDropdown((v) => !v)}
                >
                  <span className="text-xl">{toCurrency.flag}</span>
                  <span className="font-bold text-violet-700">
                    {toCurrency.code}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-1 text-violet-500 transition-transform duration-200 ${
                      toDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {toDropdown && (
                  <div className="absolute left-0 mt-2 w-32 bg-white border border-violet-200 rounded-xl shadow-lg z-30">
                    {currencyList.map((item) => (
                      <div
                        key={item.code}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl hover:bg-violet-50 transition-colors ${
                          toCurrency.code === item.code ? "bg-violet-100" : ""
                        }`}
                        onClick={() => {
                          setToCurrency(item);
                          setToDropdown(false);
                        }}
                      >
                        <span className="text-xl">{item.flag}</span>
                        <span className="font-bold text-violet-700">
                          {item.code}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl p-6 md:p-8 shadow-inner">
          {/* Customer Type */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="customerType"
                checked={customerType === "new"}
                onChange={() => {
                  setCustomerType("new");
                  setDropdownOpen(false);
                }}
                className="accent-indigo-500 w-5 h-5"
              />
              <span className="bg-white px-4 py-2 rounded-lg font-medium shadow text-slate-700">
                New Agents
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="customerType"
                checked={customerType === "select"}
                onChange={() => {
                  setCustomerType("select");
                  setDropdownOpen(false);
                }}
                className="accent-indigo-500 w-5 h-5"
              />
              <span className="bg-white px-4 py-2 rounded-lg font-medium shadow text-slate-700">
                Select Agents
              </span>
            </label>
          </div>
          {/* Customer Name */}
          <div className="flex gap-4 mb-6">
            {customerType === "new" ? (
              <input
                type="text"
                placeholder="Customer Name"
                className="flex-1 bg-white text-slate-800 font-semibold px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              />
            ) : (
              <div className="relative flex-1">
                {/* Dropdown Trigger */}
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200
                    ${
                      dropdownOpen
                        ? "border-violet-400 shadow-md"
                        : "border-violet-200"
                    }
                    bg-white text-slate-700 font-semibold focus:outline-none`}
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  <span>{selectedCustomer || "Search"}</span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    } text-violet-500`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Dropdown Panel */}
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-violet-200 z-20 p-4">
                    {/* Search Input */}
                    <div className="flex items-center gap-2 mb-3 border-2 border-violet-200 rounded-xl px-3 py-2 bg-white focus-within:border-violet-400">
                      <svg
                        className="w-5 h-5 text-violet-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-3.5-3.5" strokeLinecap="round" />
                      </svg>
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-violet-700 font-medium"
                      />
                    </div>
                    {/* Dropdown Items */}
                    <div className="max-h-48 overflow-y-auto">
                      {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((name, idx) => (
                          <div
                            key={name}
                            className={`px-4 py-3 rounded-xl cursor-pointer transition-colors duration-150
                              ${
                                selectedCustomer === name
                                  ? "bg-violet-100 text-violet-700"
                                  : "hover:bg-violet-50"
                              }
                              ${idx === 0 && "mb-1"}
                            `}
                            onClick={() => {
                              setSelectedCustomer(name);
                              setSearch(name);
                              setDropdownOpen(false);
                            }}
                          >
                            {name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-400">
                          No results
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* Customer Name နဲ့အတူရှိတဲ့ Currency Dropdown ကို အောက်ပါအတိုင်းပြင်ပါ */}

            <div className="relative">
              <button
                type="button"
                className="w-32 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold py-3 rounded-xl shadow text-xl"
                onClick={() => setCustomerFromDropdown((v) => !v)}
              >
                {customerFromCurrency.code}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    customerFromDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {customerFromDropdown && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-violet-200 rounded-xl shadow-lg z-30">
                  {[fromCurrency, toCurrency].map((item) => (
                    <div
                      key={item.code}
                      className={`flex items-center gap-2 px-4 py-3 cursor-pointer rounded-xl hover:bg-violet-50 transition-colors ${
                        fromCurrency.code === item.code ? "bg-violet-100" : ""
                      }`}
                      onClick={() => {
                        setCustomerFromCurrency(item);
                        setCustomerFromDropdown(false);
                      }}
                    >
                      <span className="text-xl">{item.flag}</span>
                      <span className="font-bold text-violet-700">
                        {item.code}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Amount/Photo */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="inputType"
                checked={inputType === "amount"}
                onChange={() => setInputType("amount")}
                className="accent-indigo-500 w-5 h-5"
              />
              <span className="bg-white px-4 py-2 rounded-lg font-medium shadow text-slate-700">
                Enter Amount
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="inputType"
                checked={inputType === "photo"}
                onChange={() => setInputType("photo")}
                className="accent-indigo-500 w-5 h-5"
              />
              <span className="bg-white px-4 py-2 rounded-lg font-medium shadow text-slate-700">
                Upload Photo
              </span>
            </label>
          </div>
          <div className="flex gap-4 mb-6">
            {fullyType === "Fully" ? (
              <div className="relative flex-1">
              <input
                type="number"
                placeholder="Enter Fully Amount"
                className="w-full bg-white text-slate-800 font-semibold px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition pr-12"
              />
              {inputType === "photo" && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <CameraIcon />
                </div>
              )}
            </div>
            ) : (
              <div className="flex flex-1 gap-4">
              <div className="relative flex-1">
                <input
                  type="number"
                  placeholder="Enter Real Fully Amount"
                  className="w-full bg-white text-slate-800 font-semibold px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition pr-12"
                />
                {inputType === "photo" && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <CameraIcon />
                  </div>
                )}
              </div>
              <div className="relative flex-1">
                <input
                  type="number"
                  placeholder="Enter Partial Amount"
                  className="w-full bg-white text-slate-800 font-semibold px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition pr-12"
                />
                {inputType === "photo" && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <CameraIcon />
                  </div>
                )}
              </div>
            </div>
            )}

            <div className="relative">
              <button
                type="button"
                className="w-32 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow text-xl"
                onClick={() => setFullyDropdownOpen((v) => !v)}
              >
                {fullyType}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    fullyDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {fullyDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-violet-200 rounded-xl shadow-lg z-30">
                  {["Fully", "Partial"].map((type) => (
                    <div
                      key={type}
                      className={`flex items-center gap-2 px-4 py-3 cursor-pointer rounded-xl hover:bg-violet-50 transition-colors ${
                        fullyType === type ? "bg-violet-100" : ""
                      }`}
                      onClick={() => {
                        setFullyType(type);
                        setFullyDropdownOpen(false);
                      }}
                    >
                      <span className="font-bold text-violet-700">{type}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg transition shadow">
              Cancel
            </button>
            <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition shadow">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAgents;

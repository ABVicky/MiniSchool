import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const endpoints = {
  notices: "https://script.google.com/macros/s/AKfycbww3t7MQgeBvGLMalMdffgSLeRabm4dss0RZHmOGZpziKYk8Nmju65xoB3A6sweltwcag/exec?type=notices",
  homework: "https://script.google.com/macros/s/AKfycbww3t7MQgeBvGLMalMdffgSLeRabm4dss0RZHmOGZpziKYk8Nmju65xoB3A6sweltwcag/exec?type=homework",
  events: "https://script.google.com/macros/s/AKfycbww3t7MQgeBvGLMalMdffgSLeRabm4dss0RZHmOGZpziKYk8Nmju65xoB3A6sweltwcag/exec?type=events",
};

export default function Notices() {
  const [activeTab, setActiveTab] = useState("notices");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(endpoints[activeTab])
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [activeTab]);

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          School Notices
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {["notices", "homework", "events"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md font-medium capitalize transition
                ${activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-center">No data available</p>
        ) : (
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md shadow-sm hover:scale-[1.01] transition"
              >
                <h3 className="text-xl font-semibold">{item.Title}</h3>
                <p className="text-sm text-gray-600">📅 {item.Date}</p>
                <p className="mt-2">{item["Notice Text"]}</p>

                {item["File Link"] && (
                  <a
                    href={item["File Link"]}
                    target="_blank"
                    className="inline-block mt-3 text-blue-600 font-semibold"
                  >
                    View File →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

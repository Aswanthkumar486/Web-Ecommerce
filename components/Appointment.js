import React from 'react';

export default function Appointment({ data }) {
  return (
    <section id="appointment" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{data.title}</h2>
        <p className="text-lg text-gray-600 mb-10">{data.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white p-6 rounded-lg shadow-md text-left space-y-5">
            {data.formFields.map((field, index) => {
              if (field.type === "select") {
                return (
                  <div key={index}>
                    <label className="block mb-1 font-medium text-sm">{field.label}</label>
                    <select className="w-full border border-gray-300 p-2 rounded">
                      {field.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={index}>
                  <label className="block mb-1 font-medium text-sm">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              );
            })}
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Submit Request
            </button>
          </form>

          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={data.featureImage}
              alt="Clinic Appointment"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <ul className="text-left space-y-2">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="text-gray-700">
                  ✅ {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

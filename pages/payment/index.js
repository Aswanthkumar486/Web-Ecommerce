import React, { useState } from 'react';
import data from '@/data/data.json';

export default function PaymentPage({ paymentData }) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedUpi, setSelectedUpi] = useState('');

  const handlePlaceOrder = () => {
    if (!selectedMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (selectedMethod === 'bank' && !selectedBank) {
      alert('Please select a bank.');
      return;
    }
    if (selectedMethod === 'upi' && !selectedUpi) {
      alert('Please select a UPI app.');
      return;
    }
    alert(`Order placed successfully using ${selectedMethod}!`);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-purple-500 flex items-center px-5 py-3 shadow-md">
        <img
          className="w-20 h-16 rounded"
          src={data.site.logo}
          alt="Site Logo"
        />
      </nav>

      {/* Payment Section */}
      <section className="flex flex-col items-center text-center text-slate-700 px-5 mt-10">
        <h2 className="text-3xl font-bold mb-6">Choose Your Payment Method</h2>
        <p className="text-gray-500 max-w-xl mb-10">
          We offer multiple secure payment options. Select the one that’s most convenient for you.
        </p>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-5xl">
          {paymentData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-5 border rounded-lg shadow transition-all bg-white ${
                selectedMethod === item.method ? 'border-purple-500' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === item.method}
                  onChange={() => setSelectedMethod(item.method)}
                />
                <i className={`${item.icon} text-purple-500 text-3xl`} aria-hidden="true"></i>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.answer}</p>
                </div>
              </div>

              {/* Render dropdown only if this card is selected */}
              {selectedMethod === item.method && item.method === 'bank' && (
                <select
                  className="border rounded p-2 mt-2"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select a bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="State Bank of India">State Bank of India</option>
                  <option value="Axis Bank">Axis Bank</option>
                </select>
              )}

              {selectedMethod === item.method && item.method === 'upi' && (
                <select
                  className="border rounded p-2 mt-2"
                  value={selectedUpi}
                  onChange={(e) => setSelectedUpi(e.target.value)}
                >
                  <option value="">Select a UPI app</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                  <option value="BHIM">BHIM</option>
                </select>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-10 bg-orange-500 hover:bg-orange-400 transition text-white px-6 py-3 rounded-lg shadow-md"
        >
          Place Order
        </button>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      paymentData: data.paymentOptions,
    },
  };
}

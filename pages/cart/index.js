// pages/cart.js
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import data from '@/data/Cart.json';

export default function CartPage({ navdata, siteData }) {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(savedCart);
  }, []);

  // ✅ Safe subtotal calculation
  const subtotal = cartData.reduce((sum, product) => {
    const price = Number(product.offerPrice ?? product.price ?? 0);
    const qty = Number(product.quantity ?? 1);
    return sum + price * qty;
  }, 0);

  const discount = 50;
  const platformFee = 10;
  const total = subtotal - discount + platformFee;

  const handleRemove = (name) => {
    const updatedCart = cartData.filter(item => item.name !== name);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar data={{ ...navdata, site: siteData }} />
      <div className="pt-20 px-5">
        <h1 className="text-4xl font-bold text-center mb-10">🛒 Your Cart</h1>
        <section className="flex lg:flex-row flex-col gap-8">

          {/* Cart Table */}
          <div className="lg:w-2/3 w-full">
            <table className="border-collapse border border-gray-300 w-full rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Product Details</th>
                  <th className="border border-gray-300 p-3 text-center">Subtotal</th>
                  <th className="border border-gray-300 p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartData.length > 0 ? (
                  cartData.map((product, idx) => {
                    const price = Number(product.offerPrice ?? product.price ?? 0);
                    const qty = Number(product.quantity ?? 1);
                    const itemTotal = price * qty;
                    return (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 p-3 flex items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 object-cover rounded-lg shadow"
                          />
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-gray-500">Qty: {qty}</p>
                          </div>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          ${itemTotal.toFixed(2)}
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <button
                            onClick={() => handleRemove(product.name)}
                            className="text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center p-5 text-gray-500">
                      Your cart is empty 🛍️
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="text-right mt-6">
              <Link href="/payment">
                <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg">
                  Place Order →
                </button>
              </Link>
              <Link href="/">
                <button className="ml-4 bg-green-500 text-white px-6 py-3 rounded-lg">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          {/* Order Summary — Always Shows */}
          <div className="lg:w-1/3 w-full bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <p className="flex justify-between"><span>Subtotal:</span><span>RS:{subtotal.toFixed(2)}</span></p>
            <p className="flex justify-between"><span>Discount:</span><span>Rs:-{discount.toFixed(2)}</span></p>
            <p className="flex justify-between"><span>Platform Fee:</span><span>Rs:{platformFee.toFixed(2)}</span></p>
            <p className="flex justify-between font-bold mt-4"><span>Total:</span><span>${total.toFixed(2)}</span></p>
          </div>

        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navdata: data.navbar,
      siteData: data.site
    },
  };
}

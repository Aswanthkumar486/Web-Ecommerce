import React from "react";
import data from '../data/data.json'
export default function ShopSection() {
  if (!data) return null;

  const { categories, products, promotions } = data;

  return (
    <section className="bg-white py-16 px-4 font-sans" id="shop">
      {/* Promotions */}
      <div className="max-w-7xl mx-auto mb-12 grid sm:grid-cols-2 gap-6">
        {promotions?.map((promo, index) => (
          <div
            key={index}
            className="bg-purple-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-purple-800">{promo.headline}</h3>
            <p className="text-gray-700 mt-2">{promo.subtext}</p>
            <a
              href={promo.link}
              className="mt-4 inline-block px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>

      {/* Categories */}
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {categories?.map((cat, index) => (
          <div key={index} className="relative group">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-56 object-cover rounded-lg shadow group-hover:opacity-90 transition"
            />
            <div className="absolute inset-0  b bg-opacity-40 h-0 rounded-lg flex items-center justify-center opacity-0  group-hover:opacity-100 transition cursor-pointer group-hover:h-56 hover:bg-purple-500">
              <span className="text-white text-lg font-semibold">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products?.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-lg font-bold text-purple-700 mt-3">{product.price}</p>
              <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

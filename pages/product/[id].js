import Link from 'next/link';
import data from '../../data/data.json';

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products?id=${params.id}`);
  const product = res.ok ? await res.json() : null;
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const site = data.site || {};
  const reviews = data.reviews || [];

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-2xl font-bold">
        Product not found 😢
      </h1>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-16 bg-purple-500 flex fixed top-0 left-0 items-center gap-2 px-4 shadow-lg z-10">
        <img src={site.logo} className="h-14 w-14 p-1" alt="Site Logo" />
       
      </nav>

      {/* Product Section */}
      <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center pt-20 pb-10 px-4">
        <div className="bg-white shadow-lg rounded-lg p-5 max-w-6xl w-full border border-gray-300 flex flex-col md:flex-row gap-8">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[400px] object-contain rounded"
            />
          </div>

          {/* Right - Product Details */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <strong className="text-xl text-green-600 mb-6">₹{product.price}</strong>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200"
                onClick={() => alert(`${product.name} added to cart!`)}
              >
                🛒 Add to Cart
              </button>

              <Link href="/payment">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md transition duration-200"
                  onClick={() => alert(`Proceeding to buy ${product.name}...`)}
                >
                  💳 Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white shadow-lg rounded-lg p-5 max-w-6xl w-full border border-gray-300 mt-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-yellow-500">
                      {'⭐'.repeat(review.rating)}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

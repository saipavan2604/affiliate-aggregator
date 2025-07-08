// File: src/App.jsx
import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy S22',
      price: 49999,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s901ezggins/gallery/in-galaxy-s22-s901-412777-sm-s901ezggins-530138280?$730_584_PNG$'
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-orange-500">ClickLoot</h1>
        <p className="text-gray-600">Smart Deals, Simplified</p>
        <div className="mt-4 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </header>

      {/* Product Grid */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 bg-white shadow-inner">
        © 2025 ClickLoot. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

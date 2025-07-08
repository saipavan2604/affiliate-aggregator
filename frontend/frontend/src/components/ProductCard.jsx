const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all border border-gray-100">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-primary text-2xl font-bold mb-3">₹{product.price}</p>
      <a
        href={product.affiliateUrl}
        target="_blank"
        className="inline-block w-full text-center border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
      >
        View Deal
      </a>
    </div>
  );
};

export default ProductCard;

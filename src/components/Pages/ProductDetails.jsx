import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../Slices/CartSlice";
import axiosInstance from "../../axiosInstance";

let ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        let response = await axiosInstance.get(`/prouducts/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addtocart(product));
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        This product does not exist
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-white rounded-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">
                {product.rating?.rate} ({product.rating?.count} reviews)
              </span>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg 
                                 font-semibold hover:bg-gray-800 transition-colors duration-200
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

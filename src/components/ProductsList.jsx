import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavLink, useLocation } from "react-router-dom";
import { useLoading } from "../contexts/LoadingContext";
import { fetchData } from "../services/faketstoreApi";
import { Button } from "react-bootstrap";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const { handleRoutesLoadComplete, handleRoutesLoading } = useLoading();
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    setLoading(true); // Inicia la carga
    console.log(id);
    async function loadAllData() {
      try {
        const productsList = await fetchData(
          `https://api.escuelajs.co/api/v1/products/?categoryId=${id}&offset=0&limit=10`
        );
        // console.log("product list: ", productsList);

        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        handleRoutesLoadComplete();
      }
    }

    loadAllData();
  }, [id]);

  return (
    <div className="grid grid-catalog gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="block w-full max-w-[284px] min-w-[225px] mx-auto h-auto relative z-1"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <NavLink to={`/producto/${product.id}`}>
            <img
              src={product.images}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
            </NavLink>
            
            <div className="p-4">
                <NavLink >
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                </NavLink>
              
              <div className="flex justify-between">
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <div className="w-[92px] h-[34px]">

                </div>
                <Button variant='outline-dark' onClick={() => addToCart(product)} className="absolute p-1 right-4 z-10">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { Suspense, useContext, useState } from "react";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import { useMediaQuery } from "react-responsive";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { ShoppingCart } from 'lucide-react';
import { CartContext } from "../contexts/CartContext";


export default function CatalogComponent() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1150px)" });
  const { cart, removeFromCart } = useContext(CartContext);
  const popover = (
    <Popover id="popover-basic" style={{ height: 'calc(100vh - 160px)', width: '300px' }}>
      <Popover.Header as="h3">Cart</Popover.Header>
      <Popover.Body className="overflow-y-auto max-h-[calc(100vh-210px)]">
      {cart.length === 0 ? <p>No items in cart</p> : (
                <ul className="gap-3">
                    {cart.map((product) => (
                            <li key={product.id} className="flex gap-4 border-b border-gray-300 pb-2 mb-2">
                                <img src={product.images} className="" style={{ width: "80px" }} />
                                <div>
                                    <h3>{product.title}</h3>
                                    <p>{product.price} $</p>
                                    <button onClick={() => removeFromCart(product.id)} className="btn btn-danger">Remove</button>
                                </div>
                            </li>

                    ))}
                </ul>
            )}
      </Popover.Body>
    </Popover>
  );
  
  return (
    <div className=" mx-auto pl-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>
      <div className="flex flex-col md:flex-row gap-4 relative">
        <aside className="w-full min-w-[300px] max-w-[350px] filter-aside relative">
          <div className="border border-gray-400 p-4 sticky top-[98px]" >FILTROOO</div>
          {/* <Filters /> */}
        </aside>
        <main className="w-full">

          <ProductsList />

        </main>

        {isDesktop ? (
          cart.length > 0 ? (
            <aside className="min-w-[275px]">
            <div className="fixed bottom-5 right-5">
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              
              <Button variant="dark" className="transition rounded-full w-12 h-12 flex items-center justify-center transform hover:scale-105"><ShoppingCart/></Button>
            </OverlayTrigger>
          </div>
            
          </aside>
          ):(
            <div></div>
          )
          
          
        ) : (
          <div className="fixed bottom-5 right-5">
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              
              <Button variant="dark" className="transition rounded-full w-12 h-12 flex items-center justify-center transform hover:scale-105"><ShoppingCart/></Button>
            </OverlayTrigger>
          </div>
        )}
      </div>
    </div>
  );
}

import { Cart } from "./components/Cart"
import { ProductsList } from "./components/ProductsList"
import { CartProvider } from "./context/CartContext"


export const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ProductsList />
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

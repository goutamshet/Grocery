
import ProductDetails from "./ProductDetails"
import SwipeToSlide from "./ProductsSlider"
import SearchBar from "./Search"
import './index.css'

const Store = () => {
    return <div className="main">
         <SearchBar/>
         <SwipeToSlide/>
         <div className="product-display-container">
            <ProductDetails/>
            <ProductDetails/>
            <ProductDetails/>
            <ProductDetails/>
         </div>
    </div>
}

export default Store
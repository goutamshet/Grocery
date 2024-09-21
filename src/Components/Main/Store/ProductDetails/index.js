import cabbage from '../../../../Assets/cabbage.png'
import add from '../../../../Assets/plus.png'
import './index.css'

const ProductDetails = () => {
    return (
        <div className="product-details-container">
            <div className='product-image-container'>
                <img className="product-image" src={cabbage}/>
            </div>
            <div className='product-title'>Cabbage</div>
            <div className='product-origin'>Indian Product</div>
            <div className='price-button-container'>
                <div className='product-price'>Rs. 30</div>
                <div className='product-button-container'>
                    <img className='add-button' src={add}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
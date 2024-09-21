import cabbage from '../../../../Assets/cabbage.png'
import carrots from '../../../../Assets/carrots.png'
import tomatoes from '../../../../Assets/tomatoes.png'
import potatoes from '../../../../Assets/potatoes.png'
import add from '../../../../Assets/plus.png'
import './index.css'

const ProductDetails = () => {

    const productDetails = [
        {
            name : 'Cabbage',
            image : cabbage,
            price : 30
        },
        {
            name : 'Potatoes',
            image : potatoes,
            price : 50
        },
        {
            name : 'Tomatoes',
            image : tomatoes,
            price : 40
        },
        {
            name : 'Carrots',
            image : carrots,
            price : 70
        }

    ]
    return (
        <>
            {productDetails.map((item,index) => (
            <div className="product-details-container" key={index}>
            <div className='product-image-container'>
               <img className="product-image" src={item.image}/>
           </div>
           <div className='product-title'>{item.name}</div>
           <div className='product-origin'>Indian Product</div>
           <div className='price-button-container'>
               <div className='product-price'>Rs. {item.price}</div>
               <div className='product-button-container'>
                   <img className='add-button' src={add}/>
               </div>
           </div> 
           </div>
            ))}
        </>
    )
}

export default ProductDetails
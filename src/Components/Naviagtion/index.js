import Category from '../../Assets/category.png'
import Notification from '../../Assets/bell.png'
import Cart from '../../Assets/trolley.png'
import Invoice from '../../Assets/invoice.png'
import Profile from '../../Assets/user.png'
import './index.css'

const NaviagtionBar = () => {
    return (
        <div className='nav-items-container'>
            <div className='nav-icon-container'>
                <img src={Category} className='nav-icon'/>
            </div>
            <div className='nav-icon-container'>
                <img src={Notification} className='nav-icon'/>
            </div>
            <div className='nav-icon-container'>
                <img src={Cart} className='nav-icon'/>
            </div>
            <div className='nav-icon-container'>
                <img src={Invoice} className='nav-icon'/>
            </div>
            <div className='nav-icon-container'>
                <img src={Profile} className='nav-icon'/>
            </div>
        </div>
    )
}

export default NaviagtionBar;
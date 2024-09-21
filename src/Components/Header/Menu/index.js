import menu from '../../../Assets/menu.svg'
import trolley from '../../../Assets/trolley.png'
import './index.css'
const MenuBar = () => {
    return <div className='menu-container'>
        <div className='menu-icon-container'>
            <img src={menu} className='menu-icon'/>
        </div>
        <div className='title'>
            Store
        </div>
        <div className='trolley-icon-container'>
            <div className='notification-number'>4</div>
            <img src={trolley} className='trolley-icon'/>
        </div>
    </div>
}

export default MenuBar
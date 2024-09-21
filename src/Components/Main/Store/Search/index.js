import search from '../../../../Assets/search.png'
import filter from '../../../../Assets/filter.png'
import './index.css'

const SearchBar = () => {
    return <div className="search-bar-container">
        <div className='search-icon-container'>
            <img src={search} className='search-icon'/>
        </div>
        <div className='search-input-container'>
            <input type='search' className='search-input' placeholder='Search for products'/>
        </div>
        <div className='filter-icon-container'>
            <img src={filter} className='filter-icon'/>
        </div>
    </div>
}

export default SearchBar
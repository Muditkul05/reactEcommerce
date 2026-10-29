import {Link} from 'react-router-dom';
import './Topbar.css'
import { useState } from 'react';
function Topbar(){
    const [ search , setSearch] = useState('');
    const [ profile , setProfile] = useState(false);
    const [ cart , setCart] = useState(false);
    const handleProfile = () => {
        setProfile(!profile);
    };
    const handleCart = () => {
        setCart(!cart);
    };       
    
    return(
        <div className = "topbar">
            <div className = "favicon">
            <Link to="/" className="topbar-icon">
                <img src="/favicon.png" alt="favicon" className='icon' style={{cursor: 'pointer'}} />
            </Link>
            </div>
            <div className='Search-bar'>
                <input type="text" className ="s-bar" value ={search}
                onChange={(e) => setSearch(e.target.value)} placeholder='Search'/>
                <img src = "/search.png" alt="search" className='search'></img>
            </div>
            <div className='cart'>
                <img src="/cart.png"
                 alt="cart"
                 className='cart-icon'
                 onClick={handleCart}
                style={{cursor: 'pointer'}}  />
                {cart && ( 
                <div className='profile-dropdown'>
                    <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
                )}
            </div>
            <div className='profile'>
                <img src="/profile.png" 
                alt="profile" 
                className='profile-icon'
                onClick={handleProfile}
                style={{cursor: 'pointer'}}  />
                {profile && ( 
                <div className='profile-dropdown'>
                    <ul>
                    <li><Link to='/profile'>Account</Link></li>
                    <li><Link to='/orders'>My Orders</Link></li>
                    <li onClick={() => setProfile(false)}>Logout</li>
                    </ul>
                </div>
                )}
            </div>
        </div>        
    );
}
export default Topbar;
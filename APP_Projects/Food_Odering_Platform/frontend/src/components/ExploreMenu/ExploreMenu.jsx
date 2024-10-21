import React from 'react';
import './ExploreMenu.css';
import { menu_List } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Explore our delicious and diverse menu, crafted to satisfy every palate!</p>
            <div className="explore-menu-list">
                {menu_List.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)}
                        className="explore-menu-list-item"
                    >
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;

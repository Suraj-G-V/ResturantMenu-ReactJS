import React, { useState } from 'react';
import menu from '../ApiServices/MenuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const Restaurat = () => {

    const uniqueList = [
        ...new Set(
            menu.map((curElem) => {
                return curElem.category;
            })
        ),
        "All",
    ];

    const [menuData, setMenuData] = useState(menu);
    const [menuList, setMenuList] = useState(uniqueList);

    // console.log(menuData);



    const filterItems = (category) => {
        const updatedMenu = menu.filter((menus) => {
            return menus.category === category;
        })
        setMenuData(updatedMenu);
    }

    return (
        <div>
            <div className="header pt-2">
                Restaurant Menu
            </div>
            <div className="">
                <NavBar filterItems={filterItems} menuList={menuList} />
            </div>

            <MenuCard menuDetails={menuData} />


        </div>
    )
}

export default Restaurat

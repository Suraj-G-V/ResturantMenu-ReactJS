import React from 'react'

const NavBar = ({ filterItems, menuList }) => {
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="btn-group">
                        {menuList.map((curElem) => {
                            return (
                                <button
                                    className="btn-group__item"
                                    onClick={() => filterItems(curElem)}>
                                    {curElem}
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar

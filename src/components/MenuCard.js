import React from 'react'
import './MenuCard.css';

const MenuCard = ({ menuDetails }) => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="row mt-3">


                        {
                            menuDetails.map((items) => {
                                const { id, image, name, price, description, category } = items;
                                return (
                                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                                        <div className="card shadow">
                                            <img src={image} alt="dish-img" className="card-img-top" />
                                            <div className="card-body">
                                                <div className="h4 card-title text-capitalize">{name}</div>
                                                <div className="card-subtitle mb-2 text-muted text-capitalize">{category}</div>
                                                <div className="card-text">{description}</div>
                                                <div className="h4 text-start">{price}</div>
                                                <div className="text-center">
                                                    <button className="btn btn-primary px-5">Order Now</button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default MenuCard

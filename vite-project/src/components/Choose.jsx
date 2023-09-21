import React from 'react'
import group1 from './img/Group84.png'
import group2 from './img/Group85.png'
import group3 from './img/Group86.png'
import group4 from './img/Group87.png'

function Choose() {
    const data = [
        {
            id: `1`,
            img: group1,
            title: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
        },
        {
            id: `2`,
            img: group2,
            title: `HANDCRAFTED JEWELS,
            MADE IN HOUSE`,
        },

        {
            id: `3`,
            img: group3,
            title: `EXCEPTIONAL QUALITY
            AND ATTENTION TO DETAIL`,
        },
        {
            id: `4`,
            img: group4,
            title: `FREE FIVE-YEAR AFTER-
            SALES SERVICE`,
        },
    ]
    return (
        <div>
            <section class="choose">
                <div class="choose__container container">
                    <h2 class="choose__title">Why choose us?</h2>
                    <div class="us">

                        {data.map((item) => {
                            return (
                                <div key={item.id} class="card">
                                    <img class="card__img" src={item.img} />
                                    <p class="card__title">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Choose
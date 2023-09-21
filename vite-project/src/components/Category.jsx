import React from 'react'
import mg1 from './img/IMG_7984V2.png'
import mg2 from './img/_MG_8086V2.png'
import mg3 from './img/_MG_8163V2.png'

function Category() {
    const category =[
        {
            id:`1`,
            img:mg1,
            title:`earrings`,
        },
        {
            id:`2`,
            img:mg2,
            title:`wedding rings`,
        },
        {
            id:`3`,
            img:mg3,
            title:`engagement rings`,
        },
    ]
  return (
    <div>
        <section class="category">
        <div class="category__container container">
            <h2 class="category__title">Shop By Category</h2>
            <div class="category__card">
                {category.map((item)=>{
                    return(

                <div key={item.id} class="card__2">
                    <img class="card__2__img" src={item.img}/>
                    <p class="card__2__title">{item.title}</p>
                </div>
                    )
                })}

              
            </div>
        </div>
    </section>
    </div>
  )
}

export default Category
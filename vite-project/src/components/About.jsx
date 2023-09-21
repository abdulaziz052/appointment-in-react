import React from 'react'
import img1 from './img/uzuk.png'
import img2 from './img/uzuk2.png'
import img3 from './img/uzuk3.png'
import img4 from './img/uzuk4.png'
import Btn from './Btn'

function About() {
    const Arr = [
        {
            id: `1`,
            title: `Solitaire setting`,
            img: img1,
            text: `The quintessential engagement ring style, the solitaire setting features a
            single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that
            sets your diamond or coloured stone centre stage, with no additional flourishes to detract from
            its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the
            solitaire setting is a true classic.`,
            link: <Btn>view collection</Btn>,
        },
        {
            id: `2`,
            title: `Diamond shoulder solitaire setting`,
            img: img2,
            text: `Accentuating a solitaire stone with smaller diamonds set into the shoulders —
            where the setting joins the upper part of the band — is a classic way to amplify the brilliance
            of your engagement ring. These elegant rows of accent diamonds add extra detail to simple
            solitaire settings and their subtle flashes of scintillation are the perfect complement to the
            sparkly halo engagement ring setting.`,
            link: <Btn>view collection</Btn>,
        },
        {
            id: `3`,
            title: `Halo setting`,
            img: img3,
            text: `The most striking of all the engagement ring settings, the halo is designed to
            deliver maximum scintillation. Placing a halo of smaller diamonds around a centre stone to form
            an intensely sparkly frame creates another layer of brilliance and has the effect of making the
            diamond appear larger. For even more impact, a diamond-set band works magnificently with this
            setting.`,
            link: <Btn>view collection</Btn>,
        },
        {
            id: `4`,
            title: `Three stone setting`,
            img: img4,
            text: `Also known as a trilogy ring, the three stone engagement ring setting is the
            embodiment of romance, with three stones said to represent the past, the present and the future.
            A stylish alternative to a solitaire engagement ring, a trio of diamonds set in a row is a
            classic three stone look, while a central diamond accompanied by two coloured stones on either
            side is a vibrant alternative. The side stones are more than simple embellishment. They guide
            the eye to the central stone and enhance its brilliance`,
            link: <Btn>view collection</Btn>,
        },
    ]
    return (
        <>
            <section class="about">
                <div class="about__container container">
                    <div class="about__">
                        <div class="about__start">
                            <p class="about__text1">The setting of your engagement ring is one of the most important
                                considerations when shopping for
                                this jewel that will represent the love you share for many years to come. It determines the
                                design
                                and aesthetic more than any other factor while at the same time securing the stones firmly in
                                place. <br /><br />

                                Discover the different types of engagement ring setting at Budrevich, each of which brings a
                                diamond
                                or coloured stone to life in its own unique way.</p>
                        </div>
                    </div>
                    {Arr.map((item) => {
                        return (
                            <div class="about__">
                                <div key={item.id} class="about__start">

                                    <h2 class="about__title">{item.title}</h2>
                                    <img class="about__img" src={item.img} />
                                    <p class="uzuk__text">{item.text}</p>
                                    <a href="#" class="about__link">{item.link}</a>
                                </div>                 
                            </div>
                            )
                        })
                    }
            </div>
    </section>
        </>
    )
}

export default About
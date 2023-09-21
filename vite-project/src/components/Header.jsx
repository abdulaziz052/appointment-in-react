import React from 'react'

function Header() {
    return (
        <div>
            <header class="header">
                <div class="header__top">
                    <div class="header__top__container container">
                        <ul class="header__top__list">
                            <li class="header__top__item">
                                <a href="#" id="book" class="header__top__link">
                                    book an appointment
                                </a>
                            </li>
                            <li class="header__top__item">
                                <a href="#" class="header__top__link">
                                    5 Year After Sales Service
                                </a>
                            </li>
                            <li class="header__top__item">
                                <a href="#" class="header__top__link">
                                    +44 020 7430 1138
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header__border__bottom">
                    <div class="navabr container">
                        <nav class="header__nav">
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        engagement rings
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        wedding rings
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        earrings
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        guides & articles
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        design process
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        reviews
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        contact us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
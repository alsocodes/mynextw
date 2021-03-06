import Image from 'next/image'
import React from 'react'
import LandingHero from '../LandingHero'

const LandingHeader = () => {
    return (
        <header className="header-area">
            <div className="navbar-area">
                <div className="container relative">
                    <div className="row">
                        <div className="w-full">
                            <nav className="flex items-center justify-between navbar navbar-expand-lg">
                                {/* <a className="mr-4 navbar-brand" href="index.html"> */}
                                <Image src="/logo.svg" alt="logo" width="100" height="64" layout="fixed" />
                                {/* </a> */}
                                <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                                    <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#features">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#facts">Why</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#blog">Blog</a>
                                        </li>
                                    </ul>
                                </div> {/* navbar collapse */}

                                {/* <div className="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                    <a className="main-btn gradient-btn" data-scroll-nav="0" href="#" rel="nofollow">Download Now</a>
                                </div> */}
                            </nav> {/* navbar */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </div> {/* navbar area */}

            <LandingHero />
        </header>
    )
}

export default LandingHeader
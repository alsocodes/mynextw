import React from 'react'

const LandingHero = () => {
    return (
        <div id="home" className="header-hero" style={{ backgroundImage: "url(/banner-bg.svg)" }}>
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 className="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Basic - SaaS Landing Page</h3>
                            <h2 className="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Kickstart Your SaaS or App Site</h2>
                            <p className="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <a href="#" className="main-btn gradient-btn gradient-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</a>
                        </div> {/* header hero content */}
                    </div>
                </div> {/* row */}
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="/header-hero.png" alt="hero" />
                        </div> {/* header hero image */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
            <div id="particles-1" className="particles"></div>
            {/* header hero */}
        </div>
    )

}

export default LandingHero
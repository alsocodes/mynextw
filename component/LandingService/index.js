import React from 'react'

const LandingService = () => {
    return (
        <section id="features" className="services-area pt-120">
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="pb-10 text-center section-title">
                            <div className="m-auto line"></div>
                            <h3 className="title">Clean and simple design, <span> Comes with everything you need to get started!</span></h3>
                        </div>
                    </div>
                </div>
                <div className="justify-center row">
                    <div className="w-full sm:w-2/3 lg:w-1/3">
                        <div className="single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="services-icon">
                                <img className="shape" src="/services-shape.svg" alt="shape" />
                                <img className="shape-1" src="/services-shape-1.svg" alt="shape" />
                                <i className="lni lni-baloon"></i>
                            </div>
                            <div className="mt-8 services-content">
                                <h4 className="mb-8 text-xl font-bold text-gray-900">Clean</h4>
                                <p className="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                <a className="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i className="ml-2 lni lni-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 lg:w-1/3">
                        <div className="mt-8 text-center single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="services-icon">
                                <img className="shape" src="/services-shape.svg" alt="shape" />
                                <img className="shape-1" src="/services-shape-2.svg" alt="shape" />
                                <i className="lni lni-cog"></i>
                            </div>
                            <div className="mt-8 services-content">
                                <h4 className="mb-8 text-xl font-bold text-gray-900">Robust</h4>
                                <p className="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                <a className="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i className="ml-2 lni lni-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 lg:w-1/3">
                        <div className="mt-8 text-center single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div className="services-icon">
                                <img className="shape" src="/services-shape.svg" alt="shape" />
                                <img className="shape-1" src="/services-shape-3.svg" alt="shape" />
                                <i className="lni lni-bolt-alt"></i>
                            </div>
                            <div className="mt-8 services-content">
                                <h4 className="mb-8 text-xl font-bold text-gray-900">Powerful</h4>
                                <p className="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                <a className="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i className="ml-2 lni lni-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingService
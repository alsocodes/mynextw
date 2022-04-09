import React from 'react'

const BottomNavbar = () => {
    return (
        <div className="bottom-navbar bg-white drop-shadow w-full">
            <div className="container" style={{ width: "500px", maxWidth: "90%" }}>
                <div className="flex justify-between">
                    <div className="text-center navb-item navb-item-active">
                        <div className="text-xl navb-item-icon"><i class="lni lni-home"></i></div>
                        <div className="text-md navb-item-label">Home</div>
                    </div>
                    <div className="text-center navb-item">
                        <div className="text-xl navb-item-icon"><i class="lni lni-heart"></i></div>
                        <div className="text-md navb-item-label">Couple</div>
                    </div>
                    <div className="text-center navb-item">
                        <div className="text-xl navb-item-icon"><i class="lni lni-calendar"></i></div>
                        <div className="text-md navb-item-label">Event</div>
                    </div>
                    <div className="text-center navb-item">
                        <div className="text-xl navb-item-icon"><i class="lni lni-gallery"></i></div>
                        <div className="text-md navb-item-label">Gallery</div>
                    </div>
                    <div className="text-center navb-item">
                        <div className="text-xl navb-item-icon"><i class="lni lni-quotation"></i></div>
                        <div className="text-md navb-item-label">Story</div>
                    </div>
                    <div className="text-center navb-item">
                        <div className="text-xl navb-item-icon"><i class="lni lni-library"></i></div>
                        <div className="text-md navb-item-label">Guest Book</div>
                    </div>
                    {/* <div className="">couple</div>
                    <div className="">event</div>
                    <div className="">gallery</div>
                    <div className="">story</div>
                    <div className="">guest book</div> */}
                </div>

            </div>
            {/* <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
                <div class="w-full max-w-md mx-auto">
                    <div className="px-7 bg-white shadow-lg rounded-2xl mb-5">
                        <div className="flex">
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                                    <span className="block px-1 pt-1 pb-2">
                                        <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Home</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                                    <span className="block px-1 pt-1 pb-2">
                                        <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Explore</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                                    <span className="block px-1 pt-1 pb-2">
                                        <i className="far fa-search text-2xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Search</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                                    <span className="block px-1 pt-1 pb-2">
                                        <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                                        <span className="block text-xs pb-1">Settings</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default BottomNavbar
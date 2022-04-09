import Image from 'next/image'
import React from 'react'

const Cover = () => {
    return (
        <div className="main-cover w-screen h-screen" style={{ backgroundImage: "url(/template-1/main-cover.jpg)" }}>
            <div className="inner-main-cover justify-center text-center">
                <Image src={`/template-1/welcome-wedding.svg`} width={250} height={250} />
                <div className="cover-couple-name">Rayyan & Kirana</div>
                <div className="cover-date">15 Mei 2025</div>
                {/* <div className="label-invit-to">Kepada yth Bapak/Ibu/Saudara/Saudari : </div> */}
                {/* <div className="guest-name">Ali shodikin & Isna Nudiya</div>
                <div className="guest-address">@alsoproject</div> */}
            </div>
        </div>
    )
}

export default Cover
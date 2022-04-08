import Head from 'next/head'
import React from 'react'
const Landing = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png" />
                {/* <link rel="stylesheet" href="styles/magnific-popup.css" />
                <link rel="stylesheet" href="styles/slick.css" />
                <link rel="stylesheet" href="styles/LineIcons.2.0.css" /> */}
                {/* <link rel="stylesheet" href="styles/animate.css" /> */}
                {/* <link rel="stylesheet" href="styles/tailwind.css" /> */}
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default Landing
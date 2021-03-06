import Head from 'next/head'
import React from 'react'
import Script from 'next/script'
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
            <div className="bg-white-grey">
                {children}
            </div>
            {/* <Script src="" strategy="lazyOnload" /> */}
            <Script src="/js/vendor/jquery-3.5.1-min.js" />
            <Script src="/js/vendor/modernizr-3.7.1.min.js" />

            {/*====== Plugins js ====== */}
            <Script src="/js/plugins.js" />

            {/*====== Slick js ====== */}
            <Script src="/js/slick.min.js" />

            {/*====== Scrolling Nav js ====== */}
            <Script src="/js/jquery.easing.min.js" />
            <Script src="/js/scrolling-nav.js" />

            {/*====== wow js ====== */}
            <Script src="/js/wow.min.js" />

            {/*====== Particles js ====== */}
            <Script src="/js/particles.min.js" />

            {/*====== Main js ====== */}
            <Script src="/js/main.js" />
        </>
    )
}

export default Landing
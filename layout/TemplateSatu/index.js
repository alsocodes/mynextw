import Head from 'next/head'
import React from 'react'
import Script from 'next/script'

const TemplateSatu = ({ title, children }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Beau+Rivage&display=swap" rel="stylesheet"></link>
            </Head>
            <div>
                {children}
            </div>
            <Script src="/js/vendor/jquery-3.5.1-min.js" />
            <Script src="/js/vendor/modernizr-3.7.1.min.js" />
            <Script src="/js/plugins.js" />
            <Script src="/js/slick.min.js" />
            <Script src="/js/jquery.easing.min.js" />
            <Script src="/js/scrolling-nav.js" />
            <Script src="/js/wow.min.js" />
            <Script src="/js/particles.min.js" />
            <Script src="/js/main.js" />
        </>
    )
}

export default TemplateSatu
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Manage Stock Online</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
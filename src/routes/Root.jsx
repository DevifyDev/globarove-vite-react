import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Root(){
    const news = ["NEWS"]
    const collections = ["COLLECTIONS"]
    const contact = ["CONTACT"]

    return (
        <>
            <Header />
            <Main />
            <Banner headings={news} id="news" />
            <Grid />
            <Banner headings={collections} id="collections" />
            <Carousel />
            <Banner headings={contact} id="contact" />
            <Form />
            <Footer />
            <Outlet />
        </>
    )
}
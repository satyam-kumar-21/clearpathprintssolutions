import React from 'react'
import Hero from './components/home/hero'
import Category from './components/home/category'
import Steps from './components/home/steps'
import WhatWeOffer from './components/home/whatWeOffer'
import WhyChoose from './components/home/whyChoose'
import StayInformed from './components/home/stayInformed'

function page() {
  return (
    <>
    <Hero />
    <Category />
    <Steps  />
    <WhatWeOffer />
    <WhyChoose />
    <StayInformed />
    </>
  )
}

export default page
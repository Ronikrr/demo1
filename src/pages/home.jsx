import React from 'react'
import Banner from '../components/banner/banner'
import Sliderdata from '../components/sliderdata/sliderdata'
import Localsection from '../components/localsection/localsection'
import Slider_box from '../components/slider_box/slider_box'
const Home = () => {
  return (
    <div>
      <Banner />
      <Sliderdata />
      <Localsection />
      <Slider_box />
    </div>
  )
}

export default Home
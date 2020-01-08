import React from "react"
import { Link } from "gatsby"
import Carousel from "react-multi-carousel"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Svg from "../Icons/AbacusWithStand"
import Svg2 from "../Icons/BigInvoice"
import Svg3 from "../Icons/BigTelephone"
import Svg4 from "../Icons/BigCloud"
import Svg5 from "../Icons/Funds"
import Svg6 from "../Icons/QualityBadge"

const IndexPage = () => (
  <>
    <div className="container">
      <div className="sidebar">sidebar</div>
      <div className="header">Header</div>
      <div className="realtors">Top 3!</div>
      <section className="features">
        <div className="feature">
          <Svg />
          <h2 className="heading-4">Worlds best homes</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
        <div className="feature">
          <Svg2 />
          <h2 className="heading-4">Only the best properties</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
        <div className="feature">
          <Svg3 />
          <h2 className="heading-4">This year is key!</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
        <div className="feature">
          <Svg4 />
          <h2 className="heading-4">Top 1 percent realtors</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
        <div className="feature">
          <Svg5 />
          <h2 className="heading-4">Offering secure payments</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
        <div className="feature">
          <Svg6 />
          <h2 className="heading-4">Join us now</h2>
          <p className="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, doloribus!</p>
        </div>
      </section>
      <div className="story__pictures">Story pictures</div>

      <div className="story__content">Story content</div>

      <section className="homes">Homes</section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
      <div className="medication-ticker"></div>
    </div>
  </>
)

export default IndexPage

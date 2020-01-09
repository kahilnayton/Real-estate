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

import image1 from "../images/image1.jpeg"
import image2 from "../images/image2.jpeg"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.jpeg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpeg"
import image8 from "../images/image8.jpeg"
import image9 from "../images/image9.jpeg"

const IndexPage = () => (
  <>
    <div className="container">
      <div className="sidebar">sidebar</div>
      <div className="header">Header</div>
      <div className="realtors">Top 3!</div>
      <section className="features">
        <div className="feature">
          <Svg className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">Worlds best homes</h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
        <div className="feature">
          <Svg2 className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">
            Only the best properties
          </h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
        <div className="feature">
          <Svg3 className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">This year is key!</h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
        <div className="feature">
          <Svg4 className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">Top 1 percent realtors</h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
        <div className="feature">
          <Svg5 className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">
            Offering secure payments
          </h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
        <div className="feature">
          <Svg6 className="feature__icon" />
          <h2 className="heading-4 heading-4--dark">Join us now</h2>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, doloribus!
          </p>
        </div>
      </section>
      <div className="story__pictures">
        <img src={image1} alt="image 1" className="story__img--1" />
        <img src={image2} alt="image 1" className="story__img--2" />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo; The best decision of our lives &rdquo;
        </h2>
        <p className="story__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
          dignissimos fugiat iste iure molestias numquam pariatur sapiente ullam
          vel.
        </p>
        <button className="btn">Find your own home</button>
      </div>

      <section className="homes">
        <div className="home">
          <img src={image5} alt="home 1" className="home__img" />
          <Svg2 className="home__like" />
          <h5 className="home__name">It's a stella house</h5>
          <div className="home__location">
            <Svg3 className="home__like" />
            <p>USA</p>
          </div>
        </div>
        <div className="home">
          <img src={image6} alt="home 1" className="home__img" />
          <Svg2 className="home__like" />
          <h5 className="home__name">It's a stella house</h5>
          <div className="home__location">
            <Svg3 className="home__like" />
            <p>
              459 m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className="home">
          <img src={image7} alt="home 1" className="home__img" />
          <Svg2 className="home__like" />
          <h5 className="home__name">It's a stella house</h5>
          <div className="home__location">
            <Svg3 className="home__like" />
            <p>USA</p>
          </div>
        </div>
        <div className="home">
          <img src={image8} alt="home 1" className="home__img" />
          <Svg2 className="home__like" />
          <h5 className="home__name">It's a stella house</h5>
          <div className="home__location">
            <Svg3 className="home__like" />
            <p>USA</p>
          </div>
        </div>
        <div className="home">
          <img src={image9} alt="home 1" className="home__img" />
          <Svg2 className="home__like" />
          <h5 className="home__name">It's a stella house</h5>
          <div className="home__location">
            <Svg3 className="home__like" />
            <p>USA</p>
          </div>
        </div>

        <div className="home">Home card 2</div>
        <div className="home">Home card 3</div>
        <div className="home">Home card 4</div>
        <div className="home">Home card 5</div>
        <div className="home">Home card 6</div>
      </section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
      <div className="medication-ticker"></div>
    </div>
  </>
)

export default IndexPage

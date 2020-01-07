import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <div className="container">
      <div className="sidebar">sidebar</div>
      <div className="header">Header</div>
      <div className="realtors">Top 3!</div>
      <section className="features">Features</section>
      <div className="story__pictures">Story pictures</div>

      <div className="story__content">Story content</div>

      <section className="homes">Homes</section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </div>
  </>
)

export default IndexPage

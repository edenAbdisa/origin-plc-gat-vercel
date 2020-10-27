import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Carousel from "react-bootstrap/Carousel"
 
  export const query = graphql`
    query AssetsPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/src/images/"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
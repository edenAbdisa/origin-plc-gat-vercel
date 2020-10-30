import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"  
import Img from 'gatsby-image' 
import Carousel from "react-bootstrap/Carousel"
const Gallery=({data}) =>(
  
    <Layout>
      <SEO title="Gallery" />
      <Carousel interval={2000}  style={{width:"inherit"}}>
      {data.allFile.edges.map(edge => {
        return (          
        <Carousel.Item>
        <Img fluid={edge.node.childImageSharp.fluid} style={{ height:"540px"}}/>
        </Carousel.Item> 
          
      )})}
      </Carousel>
      
       </Layout>
  )
  export default Gallery

  export const query = graphql`
    query assetsPhotosAndAssetsPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/src/images/emp/"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid( maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
 


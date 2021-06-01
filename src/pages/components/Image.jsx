import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (
          filter: { internal: { mediaType: { regex: "/image/" } } }
        ) {
          edges {
            node {
              relativePath
              name
              extension
              publicURL
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      if (!image) return null;
      if (image.node.extension === "svg" || !image.node.childImageSharp) {
        return <img src={image.node.publicURL} />;
      }
      return <GatsbyImage alt={alt} image={getImage(image.node)} />;
    }}
  />
);

Image.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;

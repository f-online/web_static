import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Footer({ countryCode }) {
  const { footerLinksNodes } = useStaticQuery(graphql`
    query {
      footerLinksNodes: allSanityCountry {
        nodes {
          staticPageFooterLinks {
            _id
            title
            slug {
              current
            }
            country {
              countryCode
            }
          }
          links: _rawStaticPageFooterLinks(resolveReferences: {maxDepth: 4})
          countryCode
        }
      }
    }
  `);

  let footerLinks = [];
  footerLinksNodes.nodes.forEach((node) => {
    if (node.countryCode === countryCode) {
      footerLinks = node.links;
    }
  });

  return (
    <footer className="md:px-40 py-10 text-white bg-fonline-500 flex flex-col text-center md:text-left md:flex-row md:justify-between">
      <div>
        Made with ♥ by F-Online.
      </div>
      <div className="flex flex-col md:block pt-4 md:pt-0">
        {footerLinks.map((footerLink) => (
          <Link
            to={`/${footerLink.country.countryCode}/${footerLink.slug.current}`}
            key={footerLink._id}
            className="pt-2 md:pr-4 md:pt-0"
          >
            {footerLink.title}

          </Link>
        ))}
      </div>

    </footer>
  );
}

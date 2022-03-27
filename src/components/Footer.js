import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Footer({ countryCode }) {
  const { footerLinksNodes } = useStaticQuery(graphql`
    query {
      footerLinksNodes: allSanityCountry {
        nodes {
          staticPageFooterLinks {
            id
            title
            slug {
              current
            }
            country {
              countryCode
            }
          }
          countryCode
        }
      }
    }
  `);

  let footerLinks = [];
  footerLinksNodes.nodes.forEach((node) => {
    if (node.countryCode === countryCode) {
      footerLinks = node.staticPageFooterLinks;
    }
  });

  return (
    <footer className="px-40 py-10 text-white bg-fonline-500 flex flex-col text-center md:text-left md:flex-row md:justify-between">
      <div>
        Made with ♥ by F-Online.
      </div>
      <div>
        {footerLinks.map((footerLink) => (
          <Link to={`/${footerLink.country.countryCode}/${footerLink.slug.current}`} key={footerLink.id} className="pr-4">{footerLink.title}</Link>
        ))}
      </div>

    </footer>
  );
}

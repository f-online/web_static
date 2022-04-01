export default function filterNodeByMultipleCountryCodes(nodes, countryCode) {
  const nodesInCountry = [];

  nodes.forEach((node) => {
    node.countries.forEach((nodeCountry) => {
      if (nodeCountry.countryCode === countryCode) {
        nodesInCountry.push(node);
      }
    });
  });

  return nodesInCountry;
}

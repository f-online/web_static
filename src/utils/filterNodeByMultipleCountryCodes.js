export default function filterNodeByMultipleCountryCodes(nodes, countryCode) {
  const nodesInCountry = [];

  nodes.forEach((node) => {
    console.log(node);
    node.countries.forEach((nodeCountry) => {
      console.log(nodeCountry.countryCode);
      console.log(countryCode);
      if (nodeCountry.countryCode === countryCode) {
        console.log('here');
        nodesInCountry.push(node);
      }
    });
  });

  return nodesInCountry;
}

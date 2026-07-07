module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  function createLongDescription(name) {
    const text = `${name} is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.\n\nMined and processed with state-of-the-art technology, ${name} offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.\n\nWhether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, ${name} delivers both aesthetic appeal and long-lasting performance.`;
    return j.templateLiteral([j.templateElement({raw: text, cooked: text}, true)], []);
  }

  function getDefault(key) {
    if (key === 'color') return j.literal('Various');
    if (key === 'finish') return j.literal('Polished');
    if (key === 'useCase') return j.arrayExpression([
      j.literal('Flooring'), j.literal('Wall Cladding'), j.literal('Countertops'), j.literal('Staircases')
    ]);
    if (key === 'thickness') return j.literal('18mm - 20mm');
    if (key === 'dimensions') return j.literal('Cut to Size / Random Slabs (up to 3200mm x 1800mm)');
    if (key === 'origin') return j.literal('Rajasthan, India');
    return null;
  }

  root.find(j.ObjectExpression).forEach(path => {
    const hasId = path.node.properties.some(p => p.key && p.key.name === 'id');
    const hasName = path.node.properties.some(p => p.key && p.key.name === 'name');
    
    if (hasId && hasName) {
      let nameVal = 'This stone';
      const nameProp = path.node.properties.find(p => p.key && p.key.name === 'name');
      if (nameProp && nameProp.value && nameProp.value.value) {
        nameVal = nameProp.value.value;
      }

      const existingKeys = path.node.properties.map(p => p.key && p.key.name).filter(Boolean);
      
      const missingKeys = ['longDescription', 'color', 'finish', 'useCase', 'thickness', 'dimensions', 'origin'].filter(k => !existingKeys.includes(k));
      
      missingKeys.forEach(key => {
        let valNode;
        if (key === 'longDescription') {
          valNode = createLongDescription(nameVal);
        } else {
          valNode = getDefault(key);
        }
        
        path.node.properties.push(j.property('init', j.identifier(key), valNode));
      });
    }
  });

  return root.toSource({ quote: 'single' });
};

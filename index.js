function newImage (imageName, assetFile, styleLeftValue, styleBottomValue) {
  let newImage = imageName = document.createElement('img')
  imageName.src = `assets/${assetFile}`
  imageName.style.position = 'fixed'
  imageName.style.left = styleLeftValue
  imageName.style.bottom = styleBottomValue
  document.body.append(imageName)
  return newImage
}

function newItem(itemName, assetFile, styleLeftValue, styleBottomValue) {
  let newItem = newImage(itemName, assetFile, styleLeftValue, styleBottomValue)

  newItem.addEventListener('dblclick', () => {
    newItem.remove()
  })
}

newImage('greenCharacter', 'green-character.gif', '100px', '100px')

newImage('pineTree', 'pine-tree.png', '450px', '200px')

newImage('tree', 'tree.png', '200px', '300px')

newImage('pillar', 'pillar.png', '350px', '100px')

newImage('crate', 'crate.png', '150px', '200px')

newImage('well', 'well.png', '500px', '425px')

newItem('sword', 'sword.png', '500px', '405px')

newItem('shield', 'shield.png', '165px', '185px')

newItem('staff', 'staff.png', '600px', '100px')
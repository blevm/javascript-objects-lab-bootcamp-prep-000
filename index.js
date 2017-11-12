var recipes = {
  ingredient1: "bread",
  ingredient2: "mild cheese",
  ingredient3: "sharp cheese",
  ingredient4: "butter",
  ingredient5: "tomato",
  ingredient6: "garlic",
}

function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, { [key]: value })
}


=======
  Object.assign({}, object, { key: value })
  return object;
}

>>>>>>> dc56221a3094593c95cb4651c39f5328d44a537d
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

<<<<<<< HEAD
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
=======
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
>>>>>>> dc56221a3094593c95cb4651c39f5328d44a537d
}

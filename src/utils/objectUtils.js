export const getDeepValue = (obj, key) => {
  try {
    const path = key.split('.');
    for (var i = 0; i < path.length; i++) {
      obj = obj[path[i]];
    }
    return typeof obj === 'boolean' ? obj.toString().toUpperCase() : obj;
  } catch (e) {
    return null;
  }
};

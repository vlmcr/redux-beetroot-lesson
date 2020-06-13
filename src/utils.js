export function arrToMap(arr) {
  return arr.reduce( (acc, item) => {
    acc[item._id] = item
    return acc;
  }, {})
}

export function mapToArr(ob) {
  return Object.keys(ob).map(key => ob[key])
}
export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const value of array) {
    tmp.push(appendString + value);
  }
  return tmp;
}

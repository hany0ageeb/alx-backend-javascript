export default function cleanSet(set, startString) {
  const values = [];
  set.forEach((value) => {
    if (startString !== '' && value.startsWith(startString)) {
      values.push(value.substring(startString.length));
    }
  });
  return values.join('-');
}

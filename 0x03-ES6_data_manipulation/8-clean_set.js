export default function cleanSet(set, startString) {
  if (!startString.length || startString.length === 0 || startString === '') return '';
  const values = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      values.push(value.substring(startString.length));
    }
  });
  return values.join('-');
}

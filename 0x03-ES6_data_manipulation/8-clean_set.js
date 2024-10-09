export default function cleanSet(set, startString) {
  const str = String(startString);
  if (str.length === 0 || str === '' || set.size === 0) return '';
  return [...set].filter((value) => typeof value === 'string' && value.startsWith(str)).map((value) => value.substring(str.length)).join('-');
}

export default function cleanSet(set, startString) {
  const str = String(startString);
  if (str.length === 0 || str === '' || set.size === 0) return '';
  function isValid(value) {
    if (value.startsWith(startString)) return true;
    return false;
  }
  return Array.from(set).filter((value) => isValid(value)).map((value) => value.substring(str.length)).join('-');
}

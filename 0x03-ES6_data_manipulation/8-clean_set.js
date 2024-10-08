export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === '' || set.size === 0) return '';
  function isValid(value) {
    if (value.startsWith(startString)) return true;
    return false;
  }
  return Array.from(set).filter((value) => isValid(value)).map((value) => value.substring(startString.length)).join('-');
}

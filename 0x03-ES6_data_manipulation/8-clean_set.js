export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === '' || set.size === 0) return '';
  return Array.from(set).filter((value) => value.startsWith(startString)).map((value) => value.substring(startString.length)).join('-');
}

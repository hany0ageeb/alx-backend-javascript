export default function cleanSet(set, startString) {
  if (!startString.length || startString.length === 0 || startString === '') return '';
  return Array.from(set).filter((value) => value.startsWith(startString)).map((value) => value.substring(startString.length)).join('-');
}

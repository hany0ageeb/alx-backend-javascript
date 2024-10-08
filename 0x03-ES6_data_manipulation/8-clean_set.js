export default function cleanSet(set, startString) {
  if (set.size === 0) return '';
  return Array.from(set).filter((value) => (value !== '' && startString !== '' && value.startsWith(startString)) || (value === '' && startString === '')).map((value) => value.substring(startString.length)).join('-');
}

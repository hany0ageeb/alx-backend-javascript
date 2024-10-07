export default function cleanSet(set, startString) {
  return [...set].filter((str) => startString !== '' && str.startsWith(startString)).map((str) => str.replace(startString, '')).join('-');
}

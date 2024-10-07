export default function hasValuesFromArray(set, arr) {
  return (new Set(arr)).isSubsetOf(set);
}

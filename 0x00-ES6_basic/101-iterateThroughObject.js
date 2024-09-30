export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((pre, curr) => (pre !== undefined ? `${pre} | ${curr}` : curr), undefined);
}

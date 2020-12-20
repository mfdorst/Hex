export function range(start, stop) {
  return Array(stop - start + 1)
    .fill()
    .map((_, i) => start + i)
}

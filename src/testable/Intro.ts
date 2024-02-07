export function max(lhs: number, rhs: number) {
  if (lhs === rhs) return lhs;
  return lhs > rhs ? lhs : rhs;
}

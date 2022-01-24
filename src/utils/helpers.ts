export const getStep = (overdriveCount: number): number => {
  if (overdriveCount > 0) {
    return 2
  }
  return 1
}

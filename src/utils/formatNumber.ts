export function formatViewCount(count: number): string {
  if (count >= 1_000_000) {
    // Format millions
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
  } else if (count >= 1_000) {
    // Format thousands
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, '')}k`
  } else {
    // Add commas for numbers less than 1,000
    return count.toLocaleString()
  }
}

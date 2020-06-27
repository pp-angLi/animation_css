export function count (state, action) {
  switch (action.type) {
    case "up":
      state += 1
      break
    case "down":
      state -= 1
      break
    case "click":
      state = action.count
      break
    case "toZero":
      state = 0
      break
    default:
      break
  }
  return state
}
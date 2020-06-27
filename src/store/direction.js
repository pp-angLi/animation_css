export function direction (state, action) {
  switch (action.type) {
    case "up":
      state = true
      break
    case "down":
      state = false
      break
    default:
      break
  }
  return state
}
export const getDateChat = (dt) => {
  // const dt = new Date();
  const hour = dt.getHours()
  const stateDay = hour >= 12 ? 'PM' : 'AM'
  const hour2 = hour % 12
  const min = dt.getMinutes()
  const day = dt.getDate()
  const month = dt.getMonth()
  return `${hour2}:${min} ${stateDay} | ${month} ${day}`
}

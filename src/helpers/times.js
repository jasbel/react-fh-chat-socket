const Month = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
}

export const getDateChat = (dtString) => {
  const dt = new Date(dtString)
  console.log({ dt })
  if (typeof dt !== 'object') return ''

  const hour = dt.getHours()
  const stateDay = hour >= 12 ? 'PM' : 'AM'
  const hour2 = hour % 12
  const min = dt.getMinutes()
  const day = dt.getDate()
  const month = dt.getMonth()
  return `${hour2}:${min} ${stateDay} | ${Month[month]} ${day}`
}

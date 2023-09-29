const formatDate = (date: Date) => {
  return date.toLocaleDateString('pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default formatDate

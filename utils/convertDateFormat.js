// 2022-11-15T03:32:34Z to 15 November 2022
export const convertDateFormat = (date) => {
    const d = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return d.toLocaleDateString('en-GB', options)
}
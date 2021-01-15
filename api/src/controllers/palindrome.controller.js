export default async function palindrome (req, res) {
  try {
    const parameter = req.query.text
    const cleanParameter = parameter.replace(/\s/g, '')

    if (cleanParameter === '') {
      res.status(400).json({ text: 'no text' })
      return;
    }

    const lowerCase = cleanParameter.toLowerCase()
    const result = lowerCase.split('').reverse().join('')

    res.status(200).json({ text: result, palindrome: lowerCase === result })
  } catch (err) {
    res.status(400).json({ text: 'no text' })
  }
}

import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_PREFIX_ENDPOINT_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState('lorem ipsum')
  const [imageUrl, setImageUrl] = useState()

  // para recuperar las 3 primeras palabras
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)// fact viene de la URL, el fact es el la informacion del json
      })
  }, [])
  // para recuperar la imagen cada vez que tenemos 3 nuevas palabras
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

import React, {useState} from 'react'

function Forms() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')

  const baseUrl = 'http://localhost:3000/animals'

  const handleAddAnimal = (e) => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image_link: image,
        animal_type: type
      })
    }, [])
  }

  return (
    <div>
      <form onSubmit={handleAddAnimal}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>imageUrl: </label>
        <input 
          type='text'
          name='image_link'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Animal Type: </label>
        <input 
          type='text'
          name='animal_type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button type='submit'>Add Animal</button>
      </form>
    </div>
  )
}

export default Forms
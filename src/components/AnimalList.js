import React, {useState, useEffect} from 'react'
import AnimalCard from './AnimalCard'
import Forms from './Forms'

const baseUrl = 'http://localhost:3000/animals'

function AnimalList() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(animals => setAnimals(animals))
    }, [])
  return (
    <div>
        <Forms />
        {animals.map((animalObj) => (
            <AnimalCard key={animalObj.id} animal={animalObj} />
        ))}
    </div>
  )
}

export default AnimalList
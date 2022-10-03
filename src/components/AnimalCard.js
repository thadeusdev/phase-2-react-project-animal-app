import React from 'react'

function AnimalCard({animal}) {
  return (
    <div>
        <div>
            <img src={animal.image_link} />
        </div> 
        <div>
          <h3>{animal.name}</h3>
          <p>{animal.animal_type}</p>
        </div>
        <div>
          <button>Donate</button>
          <button>Adopt</button>
        </div>       
    </div>
    
  )
}

export default AnimalCard
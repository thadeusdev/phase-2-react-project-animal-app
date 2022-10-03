import React, {useState} from 'react'

function AnimalCard({animal}) {
  const [donation, setDonation] = useState(0)

  const handleDonation = () => {
    setDonation(donation +1)
  }
  return (
    <div>
        <div>
            {/* <img src={animal.image_link} /> */}
        </div> 
        <div>
          <h3>{animal.name}</h3>
          <p>{animal.animal_type}</p>
          <p><span>Donation: $</span>{donation}</p>
        </div>
        <div>
          <button onClick={handleDonation}>Donate</button>
          <button>Adopt</button>
        </div>       
    </div>
    
  )
}

export default AnimalCard
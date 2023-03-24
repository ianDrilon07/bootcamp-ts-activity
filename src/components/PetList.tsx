import { FC } from 'react'
import PetItem from './PetItem'
import { PetsObject } from '../type'

type PetsList = {
  pets: PetsObject[]
}

const PetList: FC<PetsList> = ({ pets })  => {
  return (
    <>
      {pets.map(({ name, age, owner }) => ( 
        <PetItem 
          name={name}
          age={age}
          owner={owner}
        />
      ))}
    </>
  )
}

export default PetList

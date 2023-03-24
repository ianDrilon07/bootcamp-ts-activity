import PetItem from './PetItem'
import { PetsObject } from '../type'

type PetsList = {
  pets: PetsObject[]
}

const PetList = ({ pets }: PetsList): JSX.Element  => {
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

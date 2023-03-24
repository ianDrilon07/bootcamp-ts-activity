import { PetsObject } from "../type"

const PetItem = ({name, age, owner}: PetsObject): JSX.Element => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  )
}

export default PetItem

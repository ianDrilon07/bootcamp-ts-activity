import { FC } from "react"
import { PetsObject } from "../type"

const PetItem: FC<PetsObject> = ({name, age, owner}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  )
}

export default PetItem

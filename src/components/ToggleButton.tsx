import {FC } from "react"
import { toggleButtonTypes } from '../type';


const ToggleButton: FC<toggleButtonTypes> = ({
  buttonText,
  state,
  setState
}) => {

  return (
    <button
      onClick={() => setState((prevState) => !prevState)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton

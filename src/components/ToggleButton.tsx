import { toggleButtonTypes } from '../type';


const ToggleButton = ({
  buttonText,
  state,
  setState
}: toggleButtonTypes): JSX.Element => {

  return (
    <button
      onClick={() => setState((prevState) => !prevState)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton

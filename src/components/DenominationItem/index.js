import './index.css'

const DenominationItem = props => {
  const {Details, Denominate} = props
  const {id, value} = Details

  const buttonClicked = () => {
    console.log(value)
    Denominate(value)
  }
  return (
    <li>
      <button type="button" onClick={buttonClicked} className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

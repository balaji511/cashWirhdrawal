import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  Denominate = value => {
    console.log(value)
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bgContainer">
        <div className="bgCard">
          <div className="dfs">
            <h1>Sarah Williams</h1>
            <p>
              Balance <span className="rupees">{count}</span>{' '}
            </p>
          </div>

          <p>CHOOSE SUM (IN RUPEES)</p>

          <ul className="df">
            {denominationsList.map(each => (
              <DenominationItem
                Details={each}
                Denominate={this.Denominate}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

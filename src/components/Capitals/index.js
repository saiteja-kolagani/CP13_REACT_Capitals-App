import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].id}

  changeCountry = event => {
    this.setState({country: event.target.value})
  }

  render() {
    const {country} = this.state
    const getCountry = countryAndCapitalsList.filter(
      each => each.id === country,
    )
    console.log(getCountry)
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            id="capitals"
            className="select"
            onChange={this.changeCountry}
            value={country}
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals" className="label">
            is capital of which country?
          </label>
          <p className="country">{getCountry[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

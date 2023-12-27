import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Result extends Component {
  state = {charList: [], text: ''}

  addToList = event => {
    event.preventDefault()
    const {text} = this.state
    this.setState(prev => ({
      charList: [...prev.charList, {character: text, id: uuidv4()}],
      text: '',
    }))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {charList, text} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="left-card">
            <div className="left-top-container">
              <h1 className="left-card-heading">
                Count the characters like a Boss...{' '}
              </h1>
            </div>
            {charList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            ) : (
              <ul className="list-container">
                {charList.map(each => (
                  <li key={each.id}>
                    <p className="result">
                      {each.character}: {each.character.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="right-card">
            <h1 className="right-card-heading">Character Counter</h1>
            <form className="input-container" onSubmit={this.addToList}>
              <input
                type="text"
                className="input"
                placeholder="Enter the characters here"
                value={text}
                onChange={this.onChangeText}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Result

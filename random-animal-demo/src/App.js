import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      currentAnimal: null
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const index = this.state.index
      let newIndex
      if (index > 2) {
        newIndex = 0
      } else {
        newIndex = index + 1
      }
      this.setState({index: newIndex})

      const DOG = 0
      const CAT = 1
      const GOAT = 2

      switch(newIndex) {
        case CAT:
          axios.get('https://aws.random.cat/meow').then((response) => {
            const imageSrc = response.data.file
            const text = 'CAT'
            this.setState({currentAnimal: {imageSrc, text}})
          })
          break;
        case DOG:
          axios.get('https://random.dog/woof.json').then((response) => {
            const imageSrc = response.data.url
            const text = 'DOG'
            this.setState({currentAnimal: {imageSrc, text}})
          })
          break;
        case GOAT:
          const imageSrc = 'http://placegoat.com/200'
          const text = 'GOAT'
          this.setState({currentAnimal: {imageSrc, text}})
          break;
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const mainElementWithImageSrc = (imageSrc, text) => {
      return (
        <div>
          <img src={imageSrc} className="App-logo" alt="logo" />
          <p>
            {text}
          </p>
        </div>
      )
    }
    let element;
    const currentAnimal = this.state.currentAnimal
    if (currentAnimal) {
      element = mainElementWithImageSrc(currentAnimal.imageSrc, currentAnimal.text)
    } else {
      element = (<div>Loading....</div>)
    }

    return (
      <div className="App">
        <header className="App-header">
          {element}
        </header>
      </div>
    );
  }

}

export default App;

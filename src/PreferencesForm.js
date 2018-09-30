import React, {Component, Fragment} from 'react'

class PreferencesForm extends Component {

  state = {
    categories: [],
    activeCategories: [],
    rangeFrom: 0,
    rangeTo: 0
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories() {
    fetch(
      'https://isa-cors-proxy.herokuapp.com/api/rest/categories.json'
    )
      .then(response => response.json())
      .then(
        data => this.setState({
          categories: data
        })
      )
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.activeCategories !== this.state.activeCategories && this.props.setActiveCategories(this.state.activeCategories)
  }

  handleSelect = (e) => {
    this.setState({
      activeCategories: this.state.activeCategories.concat([e.target.value])
    })
  }

  handleRangeFrom(event) {
    this.setState({
      rangeFrom: event.target.value
    })
  }

  handleRangeTo(event) {
    this.setState({
      rangeTo: event.target.value
    })
  }



  render() {
    return (
      <Fragment>
        <form>
          <div>
            <label>Wiek</label>
            <select name="prferences">
              <option value="text">{'<'}18</option>
              <option value="text">{'18<21'}</option>
              <option value="text">{'>21'}</option>
            </select>
          </div>
          <div>
            <label>Miasto</label>
            <select name="preferences">
              <option value="text">Gdańsk</option>
              <option value="text">Sopot</option>
              <option value="text">Gdynia</option>
            </select>
          </div>
          <div>
            <label>Kino</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 99).filter(categories => categories.id < 200).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Teatr</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 199).filter(categories => categories.id < 300).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Muzyka</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 299).filter(categories => categories.id < 400).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Sztuka</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 399).filter(categories => categories.id < 500).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Literatura</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 499).filter(categories => categories.id < 600).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Rozrywka</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 599).filter(categories => categories.id < 700).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Rekreacja</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 699).filter(categories => categories.id < 800).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Nauka</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 899).filter(categories => categories.id < 1000).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Inne</label>
            <select name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 999).filter(categories => categories.id < 1100).map(
                  category => (
                    <option value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label>Cena od:</label>
            <input type="range" min="0" max="1000" onChange={(event) => this.handleRangeFrom(event)}/>
            <span>{this.state.rangeFrom}</span>
          </div>
          <div>
            <label>Cena do:</label>
            <input type="range" min={this.state.rangeFrom} max="1000" onChange={(event) => this.handleRangeTo(event)}/>
            <span>{this.state.rangeTo}</span>
          </div>
        </form>
        <div>
          <h3>Wybrane kategorie:</h3>
        {
          this.state.activeCategories.map(
            activeCategory =>
              <button onClick={() => this.props.deleteActiveCategory(parseInt(activeCategory))}>
                {this.state.categories.filter(categoryTag => categoryTag.id === parseInt(activeCategory))[0].name}
              </button>
          )
        }
        </div>
      </Fragment>

    )
  }
}

export default PreferencesForm

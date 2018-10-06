import React, {Component, Fragment} from 'react'
import './PreferencesForm.css'

class PreferencesForm extends Component {

  state = {
    categories: [],
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

  handleSelect = (e) => {
    this.props.enableCategory(e.target.value)
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

  debug(activeCategory) {
    const categ = this.state.categories
    const filcat = categ.filter(categoryTag => categoryTag.id === parseInt(activeCategory))
    const name = filcat[0].name
    return name
  }

  render() {
    return (
      <Fragment>
        <section className="preferences-form-wrapper">
            <div className="preferences-form">
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>wiek
                </label>
                <select className="preferences-select" name="preferences">
                  <option className="preferences-option" value="text">{'<18'}</option>
                  <option className="preferences-option" value="text">{'18<21'}</option>
                  <option className="preferences-option" value="text">{'>21'}</option>
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>miasto
                </label>
                <select className="preferences-select" name="preferences">
                  <option className="preferences-option" value="text">Gdańsk</option>
                  <option className="preferences-option" value="text">Sopot</option>
                  <option className="preferences-option" value="text">Gdynia</option>
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>film
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 99)
                      .filter(categories => categories.id < 200)
                      .map(category =>(
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                         </option>
                      ))
                  }
                  </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                   <input className="preferences-input" type="checkbox"/>teatr
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 199)
                      .filter(categories => categories.id < 300)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                          </option>
                      ))
                    }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>muzyka
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 299)
                      .filter(categories => categories.id < 400)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                        </option>
                       ))
                    }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>sztuka
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 399)
                      .filter(categories => categories.id < 500)
                      .map(category => (
                        <option className="preferences-option"
                                value={category.id}>{category.name}
                        </option>
                      ))
                  }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>literatura
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 499)
                      .filter(categories => categories.id < 600)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                        </option>
                      ))
                  }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>rozrywka
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 599)
                      .filter(categories => categories.id < 700)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                        </option>
                      ))
                  }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>rekreacja
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 699)
                      .filter(categories => categories.id < 800)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                        </option>
                      ))
                  }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>nauka
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 899)
                      .filter(categories => categories.id < 1000)
                      .map(category => (
                        <option
                          className="preferences-option"
                          value={category.id}>{category.name}
                        </option>
                      ))
                  }
                </select>
              </div>
              <div className="preferences-item">
                <label className="preferences-label">
                  <input className="preferences-input" type="checkbox"/>inne
                </label>
                <select
                  className="preferences-select"
                  name="preferences"
                  onChange={this.handleSelect}>{
                    this.state.categories.filter(categories => categories.id > 999)
                      .filter(categories => categories.id < 1100)
                      .map(
                  category => (
                    <option
                      className="preferences-option"
                      value={category.id}>{category.name}
                    </option>
                  ))
                }
                </select>
              </div>
              <div className="preferences-price">
                <div>
                  <label className="preferences-label">Cena od
                    <span className="preferences-span">{" " + this.state.rangeFrom + ' zł'}</span>
                  </label>
                  <input
                    type="range"
                    min="0" max="1000"
                    onChange={(event) => this.handleRangeFrom(event)}
                  />
                </div>
                <div className="">
                  <label className="preferences-label">cena do
                    <span className="preferences-span">{" " + this.state.rangeTo + ' zł'}</span>
                  </label>
                  <input
                    type="range"
                    min={this.state.rangeFrom} max="1000"
                    onChange={(event) => this.handleRangeTo(event)}
                  />
                </div>
              </div>
            <div className="preferences-chosen-categories">
              <h3>Wybrane kategorie:</h3>
                {
                  this.props.activeCategories.map(
                    activeCategory =>
                      <button
                        className="preferences-select preference-button"
                        onClick={() => this.props.deleteActiveCategory(parseInt(activeCategory))}
                      >
                        {
                          this.state.categories.length
                            ? this.debug(activeCategory)
                            : null
                        }
                      </button>
                )}
             </div>
            </div>
        </section>
      </Fragment>

    )
  }
}

export default PreferencesForm

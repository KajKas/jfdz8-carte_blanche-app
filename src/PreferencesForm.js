import React, {Component, Fragment} from 'react'
import './PreferencesForm.css'

class PreferencesForm extends Component {

  state = {
    categories: []
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

  render() {
    return (
      <Fragment>
        <form className="preferences-form">
          <div className="preferences-item">
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Film
            </label>
            <div className="preferences-select-box">
              <select className="preferences-select" name="preferences">
                {this.state.categories.filter(categories => categories.id > 99)
                  .filter(categories => categories.id < 200)
                  .map(category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                    )
                  )}
                  </select>
              </div>
            </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Teatr</label>
            <div className="preferences-select-box">
              <select className="preferences-select"  name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 199).filter(categories => categories.id < 300).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Muzyka</label>
            <div className="preferences-select-box">
              <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 299).filter(categories => categories.id < 400).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Sztuka</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 399).filter(categories => categories.id < 500).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Literatura</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 499).filter(categories => categories.id < 600).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Rozrywka</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 599).filter(categories => categories.id < 700).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Rekreacja</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 699).filter(categories => categories.id < 800).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Nauka</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 899).filter(categories => categories.id < 1000).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
          <div>
            <label className="preferences-label">
              <input className="preferences-input" type="checkbox"/>Inne</label>
            <div className="preferences-select-box">
            <select className="preferences-select" name="preferences">
              {
                this.state.categories.filter(categories => categories.id > 999).filter(categories => categories.id < 1100).map(
                  category => (
                    <option className="preferences-option" value="text">{category.name}</option>
                  )
                )
              }
            </select>
            </div>
          </div>
        </form>
      </Fragment>

    )
  }
}

export default PreferencesForm

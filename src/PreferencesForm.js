import React, {Component, Fragment} from 'react'

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
        <h3>Kino</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 99).filter(categories => categories.id < 200).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Teatr</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 199).filter(categories => categories.id < 300).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Muzyka</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 299).filter(categories => categories.id < 400).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Sztuka</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 399).filter(categories => categories.id < 500).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Literatura</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 499).filter(categories => categories.id < 600).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Rozrywka</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 599).filter(categories => categories.id < 700).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Rekreacja</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 699).filter(categories => categories.id < 800).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Nauka</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 899).filter(categories => categories.id < 1000).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
        <h3>Inne</h3>
        <select name="prferences">
          {
            this.state.categories.filter(categories => categories.id > 999).filter(categories => categories.id < 1100).map(
              category => (
                <option value="text">{category.name}</option>
              )
            )
          }
        </select>
      </Fragment>

    )
  }
}

export default PreferencesForm

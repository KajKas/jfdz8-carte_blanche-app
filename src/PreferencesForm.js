import React, {Component, Fragment} from 'react'

class PreferencesForm extends Component {

  state = {
    categories: [],
    activeCategories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.activeCategories !== this.state.activeCategories && this.props.setActiveCategories(this.state.activeCategories)
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
    this.setState({
      activeCategories: this.state.activeCategories.concat([e.target.value])
    })
  }

  render() {
    return (
      <Fragment>
        <form>
          <div>
            <label><input type="checkbox"/>Kino</label>
            <select name="prferences" onChange={this.handleSelect}>
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
            <label><input type="checkbox"/>Teatr</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 199).filter(categories => categories.id < 300).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Muzyka</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 299).filter(categories => categories.id < 400).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Sztuka</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 399).filter(categories => categories.id < 500).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Literatura</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 499).filter(categories => categories.id < 600).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Rozrywka</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 599).filter(categories => categories.id < 700).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Rekreacja</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 699).filter(categories => categories.id < 800).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Nauka</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 899).filter(categories => categories.id < 1000).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div>
            <label><input type="checkbox"/>Inne</label>
            <select name="prferences">
              {
                this.state.categories.filter(categories => categories.id > 999).filter(categories => categories.id < 1100).map(
                  category => (
                    <option value="text">{category.name}</option>
                  )
                )
              }
            </select>
          </div>
        </form>
      </Fragment>

    )
  }
}

export default PreferencesForm

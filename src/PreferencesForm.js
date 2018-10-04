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
    debugger
    const filcat = categ.filter(categoryTag => categoryTag.id === parseInt(activeCategory))
    debugger
    const name = filcat[0].name
    debugger
    console.log(name)
    return name
  }


  render() {
    return (
      <Fragment>
        <div>
        <form className="preferences-form">
          <div className="preferences-item">
            <label className="preferences-label">Wiek</label>
            <select className="preferences-select" name="prferences">
              <option className="preferences-option" value="text">{'<'}18</option>
              <option className="preferences-option" value="text">{'18<21'}</option>
              <option className="preferences-option" value="text">{'>21'}</option>
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Miasto</label>
            <select className="preferences-select" name="preferences">
              <option className="preferences-option" value="text">Gdańsk</option>
              <option className="preferences-option" value="text">Sopot</option>
              <option className="preferences-option" value="text">Gdynia</option>
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Kino</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 99).filter(categories => categories.id < 200).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Teatr</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 199).filter(categories => categories.id < 300).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Muzyka</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 299).filter(categories => categories.id < 400).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Sztuka</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 399).filter(categories => categories.id < 500).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Literatura</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 499).filter(categories => categories.id < 600).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Rozrywka</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 599).filter(categories => categories.id < 700).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Rekreacja</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 699).filter(categories => categories.id < 800).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Nauka</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 899).filter(categories => categories.id < 1000).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label className="preferences-label">Inne</label>
            <select className="preferences-select" name="preferences" onChange={this.handleSelect}>
              {
                this.state.categories.filter(categories => categories.id > 999).filter(categories => categories.id < 1100).map(
                  category => (
                    <option className="preferences-option" value={category.id}>{category.name}</option>
                  )
                )
              }
            </select>
          </div>
          <div className="preferences-item">
            <label>Cena od:</label>
            <input type="range" min="0" max="1000" onChange={(event) => this.handleRangeFrom(event)}/>
            <span>{this.state.rangeFrom}</span>
          </div>
          <div className="preferences-item">
            <label>Cena do:</label>
            <input type="range" min={this.state.rangeFrom} max="1000" onChange={(event) => this.handleRangeTo(event)}/>
            <span>{this.state.rangeTo}</span>
          </div>
        </form>
        </div>
        <div className="chosen-categories">
          <h3>Wybrane kategorie:</h3>
          {/*{*/}
            {/*this.props.activeCategories.map(*/}
              {/*activeCategory =>*/}
                {/*<button onClick={() => this.props.deleteActiveCategory(parseInt(activeCategory))}>*/}
                  {/*{this.state.categories.filter(categoryTag => categoryTag.id === parseInt(activeCategory))[0].name}*/}
                {/*</button>*/}
            {/*)*/}
          {/*}*/}


        {
          this.props.activeCategories.map(
            activeCategory =>
              <button onClick={() => this.props.deleteActiveCategory(parseInt(activeCategory))}>



                { this.debug(activeCategory)


                  // this.state.categories ?
                  // setTimeout(function () {
                  //
                  // }, 1000) : null

                }
              </button>
          )
        }
        </div>
      </Fragment>

    )
  }
}

export default PreferencesForm

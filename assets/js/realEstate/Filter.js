import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <section id="filter">
        <div className="inside">
            <h4>Filter</h4>
            <select name="city" className="filters-city" onChange={this.props.change}>
              <option value="All">All</option>
              <option value="Ridgewood">Ridgewood</option>
              <option value="Miami">Miami</option>
            </select>
            <select name="homeType" className="filters-homeType" onChange={this.props.change}>
              <option value="All">All Homes</option>
              <option value="Ranch">Ranch</option>
              <option value="Condo">Condo</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Private room">Private room</option>
            </select>
            <select name="bedrooms" className="filters-bedrooms" onChange={this.props.change}>
              <option value="0">0+ BR</option>              
              <option value="1">1+ BR</option>
              <option value="2">2+ BR</option>
              <option value="3">3+ BR</option>
              <option value="4">4+ BR</option>
            </select>
            <div className="filters price">
              <span className="title">Price</span>
              <input value={this.props.globalState.min_price} type="text" name="min_price" className="min-price" onChange={this.props.change}/>
              <input value={this.props.globalState.max_price} type="text" name="max_price" className="max-price" onChange={this.props.change}/>
            </div>
            <div className="filters floor-space">
              <span className="title">Floor Space</span>
              <input value={this.props.globalState.min_floor_space} type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change}/>
              <input value={this.props.globalState.max_floor_space} type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change}/>
            </div>
            <div className="filters extras">
            <span className="title">
              Extras
            </span>
              <label htmlFor="extras">
                <span>Elevators</span>
                <input type="checkbox" name="elavator" value="elavator" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span>Swimming Pool</span>
                <input type="checkbox" name="swimming_pool" value="swimming-pool" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span>Finished Basement</span>
                <input type="checkbox" name="finished_basement" value="finished-basement" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span>Gym</span>
                <input type="checkbox" name="gym" value="gym" onChange={this.props.change}/>
              </label>
            </div>
        </div>
      </section>
    )
  }
}

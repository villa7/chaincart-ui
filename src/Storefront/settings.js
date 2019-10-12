import React, { Component } from 'react'
import { connect } from 'react-redux'
import { money } from '../util'
import './dashboard.scss'

class Customization extends Component {
  render () {
    return (
      <div className='dashboard settings'>
        <h1>Settings</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ storefronts }, props) => {
  return {
    store: storefronts.stores.find(x => x.id === props.id),
    products: storefronts.products[props.id]
  }
}

export default connect(mapStateToProps)(Customization)

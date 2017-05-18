import { DisplayData } from '../containers/DisplayData'
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../components/loadData'
import { Navigation } from '../containers/Navigation'

export class ElectionsAppView extends Component {
  constructor(props) {
    super(props)
    loadData('/Polska/', props.onReceiveData)
  }

  onXhrStateChange() {
    if (this.xhr.readyState === XMLHttpRequest.DONE && this.xhr.status === 200) {
      this.props.onReceiveData(JSON.parse(this.xhr.responseText))
    }
  }

  render() {
    return (
      <div>
        <Navigation className='section'></Navigation>
        <DisplayData></DisplayData>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    onReceiveData: (data) => {
      dispatch({
        type: 'RECEIVE_DATA',
        data: data
      })
    }
  }
}

export const ElectionsApp = connect(mapStateToProps, mapDispatchToProps)(ElectionsAppView)

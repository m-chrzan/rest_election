import { connect } from 'react-redux'
import { TurnoutView } from '../components/TurnoutView'

const mapStateToProps = ({ subregions, subregion_nominative, region_path }) => {
  return { subregions, subregion_nominative, region_path }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReceiveData: (data) => {
      dispatch({
        type: 'RECEIVE_DATA',
        data: data
      })
    }
  }
}

export const Turnout = connect(mapStateToProps, mapDispatchToProps)(TurnoutView)

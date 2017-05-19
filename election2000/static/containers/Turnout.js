import { connect } from 'react-redux'
import { TurnoutView } from '../components/TurnoutView'

const mapStateToProps = ({ region: { locative, subregions, subregion_nominative, region_path }}) => {
  return { subregions, subregion_nominative, region_path, locative }
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

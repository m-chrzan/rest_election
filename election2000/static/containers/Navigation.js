import { connect } from 'react-redux'
import { NavigationView } from '../components/NavigationView'

const mapStateToProps = ({ region_path }) => {
  return  { region_path }
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

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationView)

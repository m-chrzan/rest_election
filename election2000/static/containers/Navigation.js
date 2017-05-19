import { connect } from 'react-redux'
import { NavigationView } from '../components/NavigationView'

const mapStateToProps = ({ region: { region_path }, user}) => {
  return  { region_path, user }
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

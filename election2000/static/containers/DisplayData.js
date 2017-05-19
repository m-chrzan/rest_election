import { connect } from 'react-redux'
import { DisplayDataView } from '../components/DisplayDataView'

let mapStateToProps = ({ region: { locative }}) => {
  return { locative }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const DisplayData = connect(mapStateToProps, mapDispatchToProps)(DisplayDataView)

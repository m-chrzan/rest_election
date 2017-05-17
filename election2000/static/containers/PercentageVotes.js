import { connect } from 'react-redux'
import { PercentageVotesView } from '../components/PercentageVotesView'

const mapStateToProps = ({ locative }) => {
  return { locative }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const PercentageVotes = connect(mapStateToProps, mapDispatchToProps)(PercentageVotesView)

import { connect } from 'react-redux'
import { PercentageVotesView } from '../components/PercentageVotesView'

const mapStateToProps = ({ locative, votes, statistics: { ballots_valid }}) => {
  return { locative, votes, ballots_valid }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const PercentageVotes = connect(mapStateToProps, mapDispatchToProps)(PercentageVotesView)

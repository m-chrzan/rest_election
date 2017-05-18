import { connect } from 'react-redux'
import { CandidateDetailsView } from '../components/CandidateDetailsView'

const mapStateToProps = ({ votes, statistics: { ballots_valid }}) => {
  return { votes, ballots_valid }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export const CandidateDetails = connect(mapStateToProps, mapDispatchToProps)(CandidateDetailsView)

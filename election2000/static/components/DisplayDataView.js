import React from 'react'
import { Navigation } from '../containers/Navigation'
import { PercentageVotes } from '../containers/PercentageVotes'
import { CandidateDetails } from '../containers/CandidateDetails'
import { Turnout } from '../containers/Turnout'

export const DisplayDataView = ({locative}) => {
  return (
    <div>
      <Navigation></Navigation>
      <PercentageVotes></PercentageVotes>
      <CandidateDetails></CandidateDetails>
      <Turnout></Turnout>
    </div>
  )
}

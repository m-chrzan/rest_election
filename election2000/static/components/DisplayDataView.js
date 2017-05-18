import React from 'react'
import { PercentageVotes } from '../containers/PercentageVotes'
import { CandidateDetails } from '../containers/CandidateDetails'
import { Turnout } from '../containers/Turnout'

export const DisplayDataView = ({locative}) => {
  return (
    <div>
      <PercentageVotes className='section'></PercentageVotes>
      <CandidateDetails className='section'></CandidateDetails>
      <Turnout className='section'></Turnout>
    </div>
  )
}

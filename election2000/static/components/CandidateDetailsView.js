import React from 'react'
import { CandidateTable } from './CandidateTable'

export const CandidateDetailsView = ({ votes, ballots_valid }) => {
  return (
    <div>
      <h2>CandidateDetails</h2>
      <CandidateTable votes={votes} ballots_valid={ballots_valid}>
      </CandidateTable>
    </div>
  )
}

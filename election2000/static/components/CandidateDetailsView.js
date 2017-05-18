import React from 'react'
import { CandidateTable } from './CandidateTable'

export const CandidateDetailsView = ({ votes, ballots_valid }) => {
  return (
    <div>
      <h1>CandidateDetails</h1>
      <CandidateTable votes={votes} ballots_valid={ballots_valid}>
      </CandidateTable>
    </div>
  )
}

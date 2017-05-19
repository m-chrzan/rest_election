import React from 'react'
import { CandidateTable } from './CandidateTable'

export const CandidateDetailsView = ({ votes, ballots_valid, locative }) => {
  return (
    <div>
      <h2>Wyniki poszczególnych kandydatów w {locative}</h2>
      <CandidateTable votes={votes} ballots_valid={ballots_valid}>
      </CandidateTable>
    </div>
  )
}

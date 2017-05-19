import React from 'react'
import { VotesChart } from './VotesChart.js'

export const PercentageVotesView = ({ locative, votes, ballots_valid }) => {
  return (
    <div>
      <h2>Procentowa liczba głosów w {locative}</h2>
      <VotesChart votes={votes} ballots_valid={ballots_valid}></VotesChart>
    </div>
  )
}

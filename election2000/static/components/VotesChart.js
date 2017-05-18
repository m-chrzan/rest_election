import React from 'react'
import { Chart } from 'react-google-charts'

export const VotesChart = ({ votes, ballots_valid }) => {
  let candidates = Object.keys(votes).map((candidate) => {
    return [candidate, 100 * votes[candidate] / ballots_valid]
  }).sort((a, b) => { return a[1] - b[1] })

  return (
    <Chart
      chartType="PieChart"
      data={[['candidate', 'votes']].concat(candidates)}
      options={{
        sliceVisibilityThreshold: 0.03,
        tooltip: {text: 'percentage', trigger: 'selection'},
        height: 400,
        width: 1000
      }}
    ></Chart>
  )
}

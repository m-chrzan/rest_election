import React from 'react'

export const CandidateTable = ({ votes, ballots_valid }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Kandydat</th>
          <th>Liczba głosów</th>
          <th>Procentowa liczba głosów</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(votes).map((candidate) => {
            return (
              <tr key={candidate}>
                <td>{candidate}</td>
                <td>{votes[candidate]}</td>
                <td>{ (100 * votes[candidate] / ballots_valid).toFixed(2) }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

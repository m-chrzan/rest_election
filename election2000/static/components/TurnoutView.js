import React from 'react'
import { loadData } from './loadData'

export const TurnoutView = (
  {
    subregions,
    subregion_nominative,
    onReceiveData,
    region_path
  }) => {
  return (
    <div>
      <h1>Turnout</h1>
      <table>
        <thead>
          <tr>
            <th>{subregion_nominative}</th>
            <th>Frekwencja</th>
          </tr>
        </thead>
        <tbody>
          {
            subregions.map((subregion) => {
              return (
                <tr key={subregion.name}>
                  <td onClick={() => {
                    loadData('/' +
                      region_path.concat(subregion.name).join('/') + '/',
                      onReceiveData)
                  }}>
                    {subregion.name}
                  </td>
                  <td>{subregion.turnout.toFixed(2)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

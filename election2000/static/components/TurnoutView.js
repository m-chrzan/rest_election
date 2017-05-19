import React from 'react'
import { loadData } from './loadData'

export const TurnoutView = (
  {
    subregions,
    subregion_nominative,
    onReceiveData,
    region_path,
    locative
  }) => {
  return (
    <div>
      <h2>Frekwencja w {locative}</h2>
      <table>
        <thead>
          <tr>
            <th>{subregion_nominative}</th>
            <th>Frekwencja</th>
          </tr>
        </thead>
        <tbody>
          {
            subregions.map((subregion, i) => {
              return (
                <tr key={subregion.name} className={i%2 === 0 ? 'even-row' : 'odd-row'}>
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

import React from 'react'
import { loadData } from './loadData'

export const NavigationView = ({ region_path, onReceiveData, user }) => {
  return (
    <div>
      <ul>
        {
          region_path.map((region, i) => {
            return (
              <li key={i} onClick={() => {
                loadData('/' + region_path.slice(0, i+1).join('/') + '/', onReceiveData)
              }}>
                {region}
              </li>
            )
          })
        }
      </ul>
      { user === "" ?
      (<div><a href='/login/'>Zaloguj się</a></div>) :
      (<div>Zalogowany jako {user}. <a href='/logout/'>Wyloguj się</a></div>)
      }
    </div>
  )
}

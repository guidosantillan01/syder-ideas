import React from 'react'

import IdeaList from 'components/Ideas/IdeaList'
import FilterIdeasBar from 'components/filters/FilterIdeasBar'
import requireAuth from 'middleware/requireAuth'

const Dashboard = () => {
  return (
    <div>
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="title is-4">Dashboard</h2>
            <FilterIdeasBar />
            <IdeaList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default requireAuth(Dashboard)
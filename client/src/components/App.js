import React, { Component } from 'react'

import LandingPage from 'components/LandingPage'

export class App extends Component {
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  // callApi = async () => {
  //   const response = await fetch('https://syder-ideas-server.herokuapp.com/api/ideas')
  //   const body = await response.json()

  //   if (response.status !== 200) throw Error(body.message)

  //   return body.ideas
  // }

  render() {
    return (
      <div>
        <LandingPage />
      </div>
    )
  }
}

export default App
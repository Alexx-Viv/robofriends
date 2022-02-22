import React from 'react'
import CardList from './CardList'
import { robots } from './robots'

function App() {
  return (
    <div>
      <h1>RobotFriends</h1>
      <CardList robots={robots} />
    </div>
  )
}

export default App

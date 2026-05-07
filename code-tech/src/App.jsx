
import { useEffect, useMemo, useState } from 'react'
import { Problems } from './component/problems/Problems'
function App() {
  
  return (
    <>
    <Problems/>
    </>
  )
}
export default App

// Challenge: Counter with history
// Build a counter with +1, -1, Reset buttons. Below the counter show a history list of every value it has been.
// Hidden gotcha: Reset should clear history too. Make sure undo (go back one step) works correctly without mutating state directly.
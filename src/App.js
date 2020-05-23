import React, { Suspense } from "react"
import { Route } from "react-router-dom"

import "./style.scss"
const Main = React.lazy(() =>
  import(/* webpackChunkName: 'Main' */ "pages/Main")
)

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>}>
        <Route exact path="/:section?">
          <Main />
        </Route>
      </Suspense>
    </div>
  )
}

export default App

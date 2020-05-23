import React from "react"
import { Sidebar, Input } from "components"
import "./style.scss"
const Main = () => {
  return (
    <>
      <Sidebar />
      <div className="section-wrapper">
        <div className="section-wrapper__container">
          Hello
          <Input
            type="text"
            value={"test"}
            label={"test"}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
export default Main

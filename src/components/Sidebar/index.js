import React from "react"
import { withRouter } from "react-router-dom"

import { SIDEBAR_ITEMS } from "./constants"

import "./style.scss"
let Sidebar = (props) => {
  const { match, history } = props
  return (
    <div className={`sidebar`}>
      <div className="sidebar__header">
        <img src={require("../../static/images/logo.png")} alt="" />
        <h3>YouSly</h3>
      </div>
      <div className="sidebar__items-container sidebar__items-container--mid">
        {SIDEBAR_ITEMS.MID_ITEMS.map((item) => {
          return (
            <div
              key={item.link}
              onClick={() => history.push(`${item.link}`)}
              className={`sidebar-item ${
                item.link.includes(match.params.section) &&
                "sidebar-item--active"
              }`}
            >
              <span className="sidebar-item__icon">{item.icon}</span>
              <p className="sidebar-item__label">{item.label}</p>
            </div>
          )
        })}
      </div>
      <div className="sidebar__items-container sidebar__items-container--footer">
        {SIDEBAR_ITEMS.FOOTER_ITEMS.map((item) => {
          return (
            <div
              key={item.link}
              onClick={() => history.push(`${item.link}`)}
              className={`sidebar-item ${
                item.link.includes(match.params.section) &&
                "sidebar-item--active"
              }`}
            >
              <span className="sidebar-item__icon">{item.icon}</span>
              <p className="sidebar-item__label">{item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Sidebar = withRouter(Sidebar)

export { Sidebar }

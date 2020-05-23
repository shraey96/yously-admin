import React from "react"
import "./style.scss"

export const Input = ({
  type = "text",
  classNames = "",
  label,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <div className={`input-container ${classNames}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        // value={value}
        onChange={(e) => onChange && onChange(e)}
        onBlur={(e) => onBlur && onBlur(e)}
        onFocus={(e) => onFocus && onFocus(e)}
      />
    </div>
  )
}

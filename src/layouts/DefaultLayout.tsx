import React, { StatelessComponent } from "react";

export const DefaultLayout: StatelessComponent = props => {
  return (
    <div className={`container`}>
      <div className="row">
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  )
}
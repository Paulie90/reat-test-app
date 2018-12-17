import React, { Component, ReactNode } from "react";

type Props = {
  selected?: boolean
}

export default class ListItem extends Component<Props> {
  render(): ReactNode {
    return (
      <div className={`list-group-item ${this.props.selected ? 'active' : ''}`}>
        Item
      </div>
    );
  }
}
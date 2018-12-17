import React, { Component, ReactNode } from "react";
import ListItem from "./ListItem";

export default class ItemsList extends Component {
  render(): ReactNode {
    return (
      <div className="list-group">
        <ListItem selected={true} />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}
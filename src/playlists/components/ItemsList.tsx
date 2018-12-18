import React, { PureComponent, ReactNode } from "react";

import ListItem from "./ListItem";
import { Playlist } from "../playlists.model";

type Props = {
  items: Array<Playlist>,
  selected?: Playlist | null,
  onSelected(item: Playlist): void
}

export default class ItemsList extends PureComponent<Props> {
  onSelect = (item: Playlist): void => {
    this.props.onSelected(item);
  }

  render(): ReactNode {
    const selected = this.props.selected;
    const itemNodes = this.props.items.map(item =>
      <ListItem playlist={item}
        key={item.id}
        onSelect={this.onSelect}
        selected={selected ? selected.id === item.id : false} />
    )

    return (
      <div className="list-group">
        {itemNodes}
      </div>
    );
  }
}
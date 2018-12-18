import React, { PureComponent } from "react";

import ItemsList from "./ItemsList";
import { Playlist } from "../playlists.model";
import SearchField from "../../shared/components/SearchField";

type Props = {
  items: Array<Playlist>,
  selected?: Playlist | null,
  onSelect(item: Playlist): void,
}

type State = {
  query: string
}

export default class FilteredItems extends PureComponent<Props, State> {
  state = {
    query: ''
  }

  onSelect = (item: Playlist) => {
    this.props.onSelect(item);
  }

  onSearch = (query: string): void => {
    const parsedQuery = query.toLocaleLowerCase();

    this.setState({
      query: parsedQuery
    })
  }

  render() {
    const query = this.state.query;
    const filteredItems = query.length > 0 ?
      this.props.items.filter(item => item.name.toLowerCase().includes(query)) :
      this.props.items;

    return <div>
      <SearchField
        className="mb-3"
        onSearch={this.onSearch} />
      <ItemsList
        items={filteredItems}
        selected={this.props.selected}
        onSelected={this.onSelect} />
    </div>;
  }
}
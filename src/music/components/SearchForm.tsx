import React, { PureComponent } from "react";

import SearchField from "../../shared/components/SearchField";

type Props = {
  onSearch(query: string): void,
}

type State = {

}

export default class SearchForm extends PureComponent<Props, State> {
  onSearch = (query: string): void => {
    this.props.onSearch(query);
  }

  render() {
    return (
      <SearchField onSearch={this.onSearch} />
    );
  }
}
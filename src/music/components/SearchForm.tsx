import React from "react";

import SearchField from "../../shared/components/SearchField";

type Props = {
  onSearch(query: string): void,
}

export const SearchForm = (props: Props) => {
  return (
    <SearchField onSearch={props.onSearch} />
  );
};
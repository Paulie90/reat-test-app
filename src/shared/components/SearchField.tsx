import React, { PureComponent, RefObject, createRef } from "react";

type Props = {
  inputRef?: RefObject<HTMLInputElement>,
  className?: HTMLDivElement["className"],
  onSearch(query: string): void
}

type State = {

}

export default class SearchField extends PureComponent<Props, State> {
  state = {};

  inputRef = this.props.inputRef || createRef<HTMLInputElement>();
  debounceHandler?: NodeJS.Timeout;

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  componentWillUnmount() {
    this.debounceHandler && clearTimeout(this.debounceHandler);
  }

  onSearch = () => {
    this.debounceHandler && clearTimeout(this.debounceHandler);

    this.debounceHandler = setTimeout(() => {
      if (this.inputRef.current) {
        this.props.onSearch(this.inputRef.current.value);
      }
    }, 400);
  }

  render() {
    return (
      <div className={`input-group ${this.props.className}`}>
        <input type="text" className="form-control" placeholder="Search" ref={this.inputRef} onChange={this.onSearch}></input>
        <div className="input-group-append">
          <button type="button" className="btn btn-primary" onClick={this.onSearch}>Search</button>
        </div>
      </div>
    )
  }
}

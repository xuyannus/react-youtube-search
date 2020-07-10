import React from "react";

class SearchBar extends React.Component {
  state = { keywords: "" };

  onInputChange = (event) => {
    this.setState({ keywords: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.keywords);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.keywords}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

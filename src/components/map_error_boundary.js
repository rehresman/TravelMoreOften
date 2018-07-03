import React, { Component } from 'react';

//TODO: Convert this into a container and action generator with Redux
//TODO: abstract this out so we can use it with the photos too

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error,
                    errorInfo })
    console.log('Error: ',this.state.error,this.state.errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div id="map" className="error-highlighter">
          <h2>Something went wrong with the map :(</h2>
          <p>Try reloading the page.</p>
        </div>
      )
    }
    return this.props.children;
  }
}

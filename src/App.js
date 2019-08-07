import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamList from "./Components/Streams/StreamList";
import StreamShow from "./Components/Streams/StreamShow";
import StreamEdit from "./Components/Streams/StreamEdit";
import Header from "./Components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </BrowserRouter>
      </div>
    );
  }
}

import React from "react";
import { render } from "react-dom";

var marked = require('marked');

import { Markdown } from "./components/Markdown";



// each new component has to extend the base React.Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      markdown: "Heading\n=======\n\n"
      +"Sub-heading\n-----------\n\n"+
      "### Another deeper heading\n\n"+
      "Text attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .",
    }

  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  initialMarkdownPreview(prop) {
    var initialMarkedOutput = {
      __html: marked(prop, {sanatize: true})
    };
    return(<div dangerouslySetInnerHTML={initialMarkedOutput}></div>)
  }

  render() { // call the render method which tells react when and what to update
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div class="jumbotron">
              <h1 class="text-center">Markdown Previewer</h1>
              <p class="lead text-center">Just type in your markdown in the markdown panel and
              watch it live update in the previewer panel</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Markdown
            initialMarkdown={this.state.markdown}
            initialMarkdownPreview={this.initialMarkdownPreview}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));

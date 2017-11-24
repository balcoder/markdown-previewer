import React from "react";
import PropTypes from 'prop-types';

var marked = require('marked');

export class Markdown extends React.Component {

  constructor(props) {
    super();
    this.state = {
      markdown: props.initialMarkdown,
      //preview:  marked(props.initialMarkdown, {sanatize: true})
      preview:  props.initialMarkdownPreview(props.initialMarkdown)
    };
  }
  initialMarkdownPreview(prop) {
    var initialMarkedOutput = {
      __html: marked(prop, {sanatize: true})
    };
    return(<div dangerouslySetInnerHTML={initialMarkedOutput}></div>)
  }

  onChangeMarkdown(event) {
    var markedOutput = {
      __html: marked(event.target.value, {sanatize: true})
    };
    this.setState({
      preview: <div dangerouslySetInnerHTML={markedOutput}></div>
          });

  }
  render() {

    return(
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header text-center">Markdown</div>
            <div >
              <div className="form-group">

                <textarea
                  className="form-control" id="markdown"
                  defaultValue={this.state.markdown}
                  onChange={(event) => this.onChangeMarkdown(event) }></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{height: 488}}>
            <div className="card-header  text-center">Preview</div>
            <div className="card-block">
              <div>{this.state.preview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Markdown.PropTypes = {
  initialMarkdown: PropTypes.string,
  initialMarkdownPreview: PropTypes.func
}

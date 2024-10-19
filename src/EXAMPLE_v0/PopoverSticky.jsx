import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tooltip, Overlay } from 'react-bootstrap';

const TooltipExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
    };
  }

  render() {
    let myTooltip = (
      <Tooltip 
        onMouseEnter={() => this.setState({ showTaskTooltip: true })}
        onMouseLeave={() => this.setState({ showTaskTooltip: false })}
      >
        I'm a tooltip and I'll stay open when you leave the target element and hover over me!
      </Tooltip>
    );

    return(
      <div>
        <h3
          ref="target"
          onMouseEnter={() => this.setState({ showTooltip: true })}
          onMouseLeave={() => this.setState({ showTooltip: false })}
        >
          Hover over me!
        </h3>

        <Overlay
          show={this.state.showTooltip}
          onHide={() => this.setState({ showTooltip: false })}
          placement="bottom"
          target={() => ReactDOM.findDOMNode(this.refs.target)}
        >
          {myTooltip}
        </Overlay>
      </div>
    );
  }  
}

export default TooltipExample;
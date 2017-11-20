import React from 'react';
import SkyLight from 'react-skylight';

export default class Comfirm extends React.Component {

  constructor(props) {
    super(props);

    this.modalStyle = {
      width:'auto',
      height:'auto',
      borderRadius: '10px'
    };
  }

  show() {
    this.modal.show();
  }

  render() {
    return (
      <SkyLight
        dialogStyles={this.modalStyle}
        title="Are you sure?"
        ref={ref => this.modal = ref}
        beforeClose = {this.props.onNo}
      >
        <h4 className="donation-header">Proceed with donation of {this.props.message}</h4>
        <button onClick={this.props.onYes} className="form-button">Yes</button>
        <button onClick={() => {this.props.onNo(); this.modal.hide()}} className="form-button">No</button>
      </SkyLight>
    )
  }

}

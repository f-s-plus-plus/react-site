import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class ModalCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle} className="modal-button">
          {this.props.buttonName}
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader className="modal-edges">
            Contact Information
          </ModalHeader>
          <ModalBody className="modal-body">
            fsaulean@gmail.com <br/>
            fsaulean@uvm.edu <br/>
            808-315-5313
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} className="modal-edges">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default ModalCustom;

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class editStudent extends Component {
  render() {  
    return (
      <div>
        <Modal
          isOpen={this.props.editStudentModal}
          toggle={this.props.toggleEditStudentModal}
        >
          <ModalHeader toggle={this.props.toggleEditStudentModal}>
            Update Student
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editStudentData.first_name}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editStudentData.last_name}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editStudentData.email}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editStudentData.phone}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateStudent}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditStudentModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

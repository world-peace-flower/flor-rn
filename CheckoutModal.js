import React from "react";
import Modal from "react-native-modalbox";
import ModalContent from "./ModalContent";
import { StyleSheet } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} style={[styles.modal]} position={"bottom"}>
        <ModalContent/>
      </Modal>
    );
  }

}

const styles = StyleSheet.create({
  modal: {
    height: 600,
  },
})


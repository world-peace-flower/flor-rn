import React from "react";
import { ScrollView, Text, Button, Dimensions, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modalbox";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Pane = styled.View`
  flex: 1;
  width: ${SCREEN_WIDTH};
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 77,
    margin: 20,
  },
  message: {
    fontSize: 15,
    margin: 8,
  }
});

class OnBoarding extends React.Component {
  state = { isOpen: true };

  render() {
    return (
      <Modal isOpen={this.state.isOpen} swipeToClose={false}>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ flex: 1, backgroundColor: "#eee" }}
        >
          <Pane>
            <Text style={styles.message}>１輪の花を、届けよう。</Text>
          </Pane>
          <Pane>
            <Text style={styles.message}>田舎のおばあちゃんに。</Text>
            <Text style={styles.message}>遠距離の恋人に。</Text>
            <Text style={styles.message}>卒業する先輩に。</Text>
            <Text style={styles.message}>たまにしか会えない実家の両親に。</Text>
          </Pane>
          <Pane>
            <Text style={styles.message}>送りたいお花を選ぶだけ。</Text>
          </Pane>
          <Pane>
            <Text style={styles.message}>あなたの想いを、届けよう。</Text>
            <Button
              title="はじめる"
              color="#DE87BB"
              onPress={() => this.setState({ isOpen: false })}
            />
          </Pane>
        </ScrollView>
      </Modal>
    );
  }
}

export default OnBoarding;

import React from "react";
import { ScrollView, Text, Button, Dimensions } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modalbox";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Pane = styled.View`
  flex: 1;
  width: ${SCREEN_WIDTH};
  align-items: center;
  justify-content: center;
`;

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
            <Text>flor</Text>
            <Text>１輪の花を届けよう</Text>
          </Pane>
          <Pane>
            <Text>田舎のおばあちゃんに。</Text>
            <Text>遠距離の恋人に。</Text>
            <Text>卒業する先輩に。</Text>
            <Text>たまにしか会えない実家の両親に。</Text>
          </Pane>
          <Pane>
            <Text>お花を選んで気軽に贈ろう</Text>
          </Pane>
          <Pane>
            <Text>あなたの想いを届けよう</Text>
            <Button
              title="はじめる"
              onPress={() => this.setState({ isOpen: false })}
            />
          </Pane>
        </ScrollView>
      </Modal>
    );
  }
}

export default OnBoarding;

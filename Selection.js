import React from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from "react-native";
import CheckoutModal from './CheckoutModal';
import styled from "styled-components/native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Pane = styled.ImageBackground`
  flex: 1;
  width: ${SCREEN_WIDTH};
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding: 100px 0;
`;

export default class Selection extends React.Component {

  state = {
    flowers: [
      {
        id: 1,
        name: "バラ",
        description:
          "花言葉は「愛」。目を閉じたときに浮かぶ、あの人へ。",
        imgSrc: require("./assets/rose.jpg")
      },
      {
        id: 2,
        name: "チューリップ",
        description:
          "花言葉は「思いやり」。お世話になったあの人へ。",
        imgSrc: require("./assets/rose.jpg")
      },
      {
        id: 3,
        name: "ガーベラ",
        description:
          "花言葉は「希望」。夢を持っているあの人へ。",
        imgSrc: require("./assets/gerbera.jpg")
      }
    ],
    isOpen: false,
  };

  render() {
    return (
      <>
        <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
          {this.state.flowers.map(flower => (
            <Pane key={flower.id} source={flower.imgSrc}>
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    marginBottom: 12,
                    fontWeight: "bold"
                  }}
                >
                  {flower.name}
                </Text>
                <Text style={{ color: "#fff", marginBottom: 12 }}>
                  {flower.description}
                </Text>
  
                <TouchableHighlight
                  onPress={() => {this.setState({ isOpen: true })}}
                  underlayColor="white"
                >
                  <View
                    style={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      borderRadius: 999,
                      height: 44,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 18 }}>
                      この花を選ぶ
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </Pane>
          ))}
        </ScrollView>
        <CheckoutModal isOpen={this.state.isOpen}/>
      </>
    );
  }
}

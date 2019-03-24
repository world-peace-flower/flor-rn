import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import axios from "axios";

export default class CompleteScreen extends React.Component {
  state = { address: "", billing: "" };

  async componentDidMount() {
    const address = await AsyncStorage.getItem("address");
    const billing = await AsyncStorage.getItem("billing");
    this.setState({
      address: JSON.stringify(address),
      billing: JSON.stringify(billing)
    });

    axios.post("https://dd674287.ngrok.io/v1/order", {
      flower_id: "バラ",
      destination_address: address.todofuken + " " + address.apart,
      destination_name: "斎藤 エミ子"
    });
  }

  render() {
    return (
      <View style={styles.screenRoot}>
        <View style={styles.form}>
          <Text style={styles.title}>ご注文が完了しました</Text>
          {/* <Text style={styles.title}>{this.state.address}</Text> */}
          {/* <Text style={styles.title}>{this.state.billing}</Text> */}
          <Text style={styles.title}>Thank You! 💜</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  form: {
    alignItems: "stretch",
    marginLeft: 40,
    marginRight: 40
  },
  title: {
    marginTop: 26,
    textAlign: "center"
  },
  doubleTextInputWrapper: {
    marginTop: 26,
    flexDirection: "row",
    height: 40
  },
  doubleTextInput: {
    height: 40,
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  multilineTextInput: {
    marginTop: 12,
    height: 120,
    justifyContent: "flex-start",
    backgroundColor: "#EEEEEE"
  },
  nextButton: {
    marginTop: 26,
    backgroundColor: "transparent",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgb(123, 123, 123)",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: 44,
    backgroundColor: "#EEEEEE"
  },
  nextButtonText: {
    color: "rgb(8, 8, 8)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  }
});

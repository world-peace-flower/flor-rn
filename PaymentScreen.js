import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class PaymentScreen extends React.Component {
  state = {
    num: "",
    limit: "",
    cvc: ""
  };

  render() {
    return (
      <View style={styles.screenRoot}>
        <View style={styles.form}>
          <Text style={styles.title}>請求先の情報</Text>
          <TextInput
            placeholder="カード番号"
            style={styles.singleTextInput}
            onChangeText={text => this.setState({ num: text })}
          />
          <TextInput
            placeholder="有効期限"
            style={styles.singleTextInput}
            onChangeText={text => this.setState({ limit: text })}
          />
          <TextInput
            placeholder="セキュリティーコード"
            style={styles.singleTextInput}
            onChangeText={text => this.setState({ cvc: text })}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              AsyncStorage.setItem("billing", JSON.stringify(this.state));
              this.props.navigation.navigate("CompleteScreen");
            }}
          >
            <Text style={styles.nextButtonText}>次へ</Text>
          </TouchableOpacity>
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
  singleTextInput: {
    marginTop: 12,
    height: 40,
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

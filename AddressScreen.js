import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage
} from "react-native";

export default class AddressScreen extends React.Component {
  state = {
    num: "",
    todofuken: "",
    apart: ""
  };

  render() {
    return (
      <View style={styles.screenRoot}>
        <View style={styles.form}>
          <Text style={styles.title}>お届け先の情報</Text>
          <View style={styles.doubleTextInputWrapper}>
            <TextInput
              autoFocus={true}
              placeholder="郵便番号"
              style={styles.doubleTextInput}
              onChangeText={text => this.setState({ num: text })}
            />
            <TextInput
              autoFocus={true}
              placeholder="都道府県"
              style={[styles.doubleTextInput, { marginLeft: 16 }]}
              onChangeText={text => this.setState({ todofuken: text })}
            />
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="市区町村 番地 マンション・アパート名"
            style={styles.multilineTextInput}
            onChangeText={text => this.setState({ apart: text })}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              AsyncStorage.setItem("address", JSON.stringify(this.state));
              this.props.navigation.navigate("PaymentScreen");
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

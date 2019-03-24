import React from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class extends React.Component {
    render() {
      return (
         <View style={styles.screenRoot}>
          <View style={styles.form}>
            <Text style={styles.title}>お届け先の情報</Text>
            <TextInput
              placeholder="カード番号"
              style={styles.singleTextInput}/>
            <TextInput
              placeholder="有効期限"
              style={styles.singleTextInput}/>
            <TextInput
              placeholder="セキュリティーコード"
              style={styles.singleTextInput}/>
            <TouchableOpacity
		  	  style={styles.nextButton}>
		  	  <Text
		  	    style={styles.nextButtonText}>次へ</Text>
		    </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  screenRoot: { 
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'flex-start',
  },
  form: {
    alignItems: 'stretch', 
    marginLeft: 40,
    marginRight: 40,
  },
  title: { 
    marginTop: 26,
    textAlign: 'center'
  },
  singleTextInput: {
    marginTop: 12,
    height: 40, 
    justifyContent: "flex-start",
    backgroundColor: '#EEEEEE'
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
    backgroundColor: '#EEEEEE'
  },
  nextButtonText: {
    color: "rgb(8, 8, 8)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
})
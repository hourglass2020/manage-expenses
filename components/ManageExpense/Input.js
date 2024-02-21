import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function Input({ label, style, textInputConfig, invalid }) {
    let inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMulitiline);
    }

    if(invalid){
        inputStyles.push(styles.invalidInput)
    }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary800
  },
  inputMulitiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel:{
    color:GlobalStyles.colors.error500
  },
  invalidInput:{
    backgroundColor: GlobalStyles.colors.error50
  }
});

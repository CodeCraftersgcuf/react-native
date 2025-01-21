import { TextInput,  View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { back } from "react-native/Libraries/Animated/Easing";
import { useState } from "react";

function StartGame({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }
  function resetInputHandler(){
      setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [{text: "OK", style: "destructive", onPress: resetInputHandler}]);
      return;
    }

    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton> Reset </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Start</PrimaryButton>
        </View> 
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    alingItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer:{
    flex:1,
  }
});

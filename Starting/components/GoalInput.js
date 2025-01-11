import { StyleSheet, Text, View, Button,  } from "react-native-web"
import { useState } from "react";
export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function getInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal!"
                    onChangeText={getInputHandler}
                    value={enteredGoalText}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "space-between",
        alignContent: "center",
        paddingBottom: 14,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "green",
        width: "80%",
        padding: 10,
    },

});
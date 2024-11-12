import { StyleSheet, View, Text } from "react-native-web"
export default function GoalItem(props) {
    return (
        <View style={styles.goalItem} >
            <Text style={{ color: "white" }}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.craet({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8,
        color: "white",
    },
});
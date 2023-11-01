import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { PaperProvider } from "react-native-paper";
import { TextInput, RadioButton, Button } from "react-native-paper";

export default function App() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [value, setValue] = useState("like");

  const handleSubmit = () => {
    Alert.alert(
      (title = "Summary"),
      (message =
        "My name is " +
        name +
        " and I am " +
        age +
        " years old. I " +
        value +
        " coffee")
    );
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Age"
          value={age}
          onChangeText={(age) => setAge(age)}
        />
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={styles.radioContainer}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 16 }}>Like Coffee</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text>Yes</Text>
              <RadioButton value="like" />
            </View>
            <View>
              <Text>No</Text>
              <RadioButton value="do not like" />
            </View>
          </View>
        </RadioButton.Group>
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  input: {
    margin: 15,
  },
  button: {
    margin: 10,
    height: 50,
  },
  radioContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 10,
  },
});

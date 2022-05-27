import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }) => {
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
  const navigation = useNavigation();

  const updateToDo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={StyleSheet.container}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Masukkan update nama kegiatan"
      />
      <Pressable
        style={styles.bottonUpdate}
        onPress={() => {
          updateToDo;
        }}
      >
        {" "}
        Update Todo
      </Pressable>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  bottonUpdate: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal:32,
    borderRadius:4,
    elevation:10,
    backgroundColor: "#0de065",
  },
});

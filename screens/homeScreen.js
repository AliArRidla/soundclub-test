import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection("todos");
  const [addData, setAddData] = useState("");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
       
      </View>
    </View>
  );

  useEffect(() => {
    todoRef.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        const { heading } = doc.data();
        todos.push({ id: doc.id, heading });
      });
      setTodos(todos);
    });
  }, []);

  const deleteToDo = (todos) => {
    todoRef
      .doc(todos.id)
      .delete()
      .then(() => {
        alert("Hapus berhasil");
      })
      .cacth((error) => {
        alert(error);
      });
  };

  const addToDo = (todos) => {
    if (addData && addData.length > 0) {
      //   cek apa kita punya todo
      const timestamp = firebase.firestore.FieldValue.serverTimestamp(); // ambil waktu server
      const data = {
        heading: addData,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData("");
          Keyboard.dismiss(); // kyboard dismiss it
        })
        .cacth((error) => {
          alert(error);
        });
    }
  };
};

export default HomeScreen;

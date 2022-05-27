import { View,Text,FlatList,StyleSheet,TextInput,TouchableOpacity,Keyboard } from "react-native"
import React,{useState,useEffect} from "react"
import { firebase } from "../config"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    const [todos,setTodos] = useState([]);
    const todoRef = firebase.firestore().collection("todos");
    const [addData,setAddData] = useState("");
    const navigation = useNavigation();


    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )

}

export default HomeScreen
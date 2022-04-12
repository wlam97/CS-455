import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';

//this portion here is to show the cells that will display the user's guesses for 6 letter title names
const AnimeAssumption = () => ( 
  <SafeAreaView style={styles.AnimeAssumption}> 
    <View style={styles.guessRow}></View>
    <View style={styles.guessRow}></View>
    <View style={styles.guessRow}></View>
    <View style={styles.guessRow}></View>
    <View style={styles.guessRow}></View>
    <View style={styles.guessRow}></View>
    
  </SafeAreaView>
)
//safe area view is to help avoid the application being cut off on devices with camera cutouts or notches
export default function App() {


//this is to create the guessing rows/columns which would fill up with the user's guesses
  //i was attempting to use input and set input to constantly update the cells in the wordle game,
  const [input, setInput] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ANIME ASSUMPTION</Text>
      <StatusBar style="auto" />
      <View>
        <AnimeAssumption />
        <AnimeAssumption />
        <AnimeAssumption />
        <AnimeAssumption />
        <AnimeAssumption />
        <AnimeAssumption />
      </View>
      
      <Text style = {styles.h1}> Enter Your Anime Assumption Below</Text>
      <TextInput style ={styles.input}
       onChangeText={(text)=> setInput(text)}
       onSubmitEditing={()=>{alert('Your answer is:');
      }}
      value={input}
       />
    </SafeAreaView> //The input was originally meant to take the user's text from their keyboard via/apple or android keyboard, and then display them into the cells afterwards
    //and then marking them blank,green, or yellow accordingly 
  );
}

//this was some basic logic that is not fully implemented or by any means correct, just to 
//wrap my head around some of the logic
//basically, I want it to look at the inputed guess, and answer word as an array, and a forloop will 
//then compare each position to each other, and then the outcome will 
/*
for (let i = 0; i <AnimeNames.length; i++)
{
if (guessName[i].letter === ANSWER[i])
  {
alert ("You Win!") (all letter boxes turn green)
  }
  else if 
  {
    (ANSWER.contains(GuessName[i].letter))  (letter boxes that are correct but not in the right position show yellow)
    alert ("Answer is Incorrect, but these letters exist in the word")
  }
  else
  {
alert ("Answer Is Incorrect") (simply black squares if incorrect)
  }

if (guessAttempt < 5)
{
  increment guessAttempt to indicate they have less chances to guess
}
*/

//css below which outlays the main UI of the application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  title: {
    color: '#808080',
    fontSize: 32,
    fontWeight: "bold",
  },
  h1: {
    color: '#808080',
    fontSize: 16,
    fontWeight: "bold",
    

  },
  AnimeAssumption: {
    flexDirection: "row",
    justifyContent: "center",
  },
  guessRow: {
    borderColor: "#d3d6da",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    width: 50,
    height: 50,
    margin: 5,
  },
  input: {
  borderWidth: 1,
  borderColor: "#d3d6da",
  backgroundColor: "#808080",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 50,
  },
});

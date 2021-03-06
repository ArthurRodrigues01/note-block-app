import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, Alert, TouchableOpacity, Image, View } from 'react-native';
import Svg, { Path } from "react-native-svg"
import  {InputNoteTitle, InputNote, DivLine} from '../../components/Forms/style.js';





const dateObj = new Date()
var d = dateObj.getUTCDate()
var m = dateObj.getUTCMonth()
var y = dateObj.getUTCFullYear()
var h = dateObj.getUTCHours()
var M = dateObj.getUTCMinutes()
var s = dateObj.getUTCSeconds()
var mil = dateObj.getUTCMilliseconds()
const NOW = `${d}-${m}-${y} ; ${h}:${M}:${s}:${mil}` // Datetime atual





//Gerador de id
function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}





//constante das notas
const NOTES = "notes" 





export default function Create({ navigation, route }) {  
  const isEditableMode = Boolean(route.params && route.params.title)

  const [title, setTitle] = useState(isEditableMode ? route.params.title  : null)
  const [note, setNote] = useState(isEditableMode ? route.params.text  : null)
  
  // Função para criar as notas e alterar as existentes
  function updateNote(){
    if(AsyncStorage.getItem(NOTES)){
      //Caso exista alguma nota salva
      
      title !== null || setTitle("TITULO")

      if(isEditableMode){
        try {
            
          const notes = JSON.parse(AsyncStorage.getItem(NOTES).notes)
          console.warn(notes)
          AsyncStorage.setItem(NOTES, JSON.stringify({
            notes: notes.concat({id: route.params.id, date: NOW, title: title, text: note})
          }))   
        } catch (error) {
             
        }
      }else{
        try {
          
          const notes = JSON.parse(AsyncStorage.getItem(NOTES).notes)
          console.warn(notes)
          AsyncStorage.setItem(NOTES, JSON.stringify({
            notes: notes.concat({id: generateUUID(), date: NOW, title: title, text: note})
          }))   
        } catch (error) {
          
        }
      }
    }else{
      //Caso não exista nenhuma nota salva
      
      title !== null || setTitle("TITULO")
  
      AsyncStorage.setItem(NOTES, JSON.stringify({
        notes: [
          {id: generateUUID(), date: NOW, title: title, text: note}
        ]
      }))
    }
  }





    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity 
          onPress={() => {
              if(note !== null && note !== ""){
                  Alert.alert("Nota", "Salvar nota?", [
                  {
                    text: "Não",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                  },
                  { text: "Sim", onPress: () => {
                    updateNote()
                    console.warn(AsyncStorage.getItem(NOTES))
                    navigation.goBack()
                  }}
                ]);
                return true;
              }else{
                navigation.goBack()
              }
            }
          } 
          style={{backgroundColor: "#Daa424", }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              xmlSpace="preserve" 
              fill="rgb(255,255,255)"
              width={35} 
              height={35}
              marginRight={25}
            >
              <Path d="M911 421H312.2l181-181c30.8-30.8 30.8-80.8 0-111.6-30.8-30.8-80.8-30.8-111.6 0L10 500l371.6 371.6c15.4 15.4 35.6 23.1 55.8 23.1 20.2 0 40.4-7.8 55.8-23.1 30.8-30.8 30.8-80.8 0-111.6l-181-181H911c43.6 0 78.9-35.3 78.9-78.9 0-43.6-35.3-78.9-78.9-78.9v-.2z" />
            </Svg>  
          </TouchableOpacity>
        ),
      });
    });





    return (
      <View>
        <ScrollView>
            <InputNoteTitle 
            placeholder="Digite um título..."
            onChangeText={(val) => setTitle(val)}
            value={title}
            />
            <DivLine/>
            <InputNote 
            placeholder="Escreva uma nota..."
            multiline={true}
            numberOfLines={20}
            onChangeText={(val) => setNote(val)}
            value={note}
            />
        </ScrollView>
      </View>
    );
  }
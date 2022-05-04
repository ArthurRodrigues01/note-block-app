import React, {useState, useEffect} from 'react';
import { View, ScrollView, Alert, BackHandler } from 'react-native';
import  {InputNoteTitle, InputNote, CreateButton, DivLine, ButtonContainer} from './style.js';


export default props => {
    const [title, setTitle] = useState(null)
    const [note, setNote] = useState(null)

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);    

    return (        
        <View style={{flex: 1}}>
            <ScrollView>
                <InputNoteTitle 
                placeholder="Digite um título..."
                onChange={setTitle}/>
                <DivLine/>
                <InputNote 
                placeholder="Escreva uma nota..."
                multiline={true}
                numberOfLines={20}
                onChange={setNote}
                />
            </ScrollView>
        </View>
    )
}

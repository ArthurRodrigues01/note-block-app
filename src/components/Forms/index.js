import React from 'react';
import { View, ScrollView } from 'react-native';
import  {InputNoteTitle, InputNote, CreateButton} from './style.js';


export default props =>
<View style={{flex: 1}}>
    <ScrollView>
        <InputNoteTitle/>
        <InputNote/>
    </ScrollView>
    <View style={{height: 250}}><CreateButton/></View>
</View>

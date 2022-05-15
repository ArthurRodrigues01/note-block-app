import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native';
import { DivLine } from '../../Forms/style.js';
import { View, Text } from 'react-native';

const NOTES = 'notes'

try {
    var notes = JSON.parse(AsyncStorage.getItem(NOTES));
} catch (error) {
    var notes = {
        notes: [
            {
                title: "Nenhuma nota encontrada",
                text: "",
                id: 1
            }
        ]
    }
}

const NoteButton = styled.TouchableOpacity`
    padding-left: 30px;
    padding-top: 10px;
`

const TitleOfNoteButton = styled.Text`
    font-weight: bold;
    font-size: 25px;
    max-width: 80%;
    padding-bottom: 15px;
`
const TextOfNoteButton = styled.Text`
    font-size: 15px;
    max-width: 80%;
    padding-bottom: 15px;
`

const NotesArea = () => {
    const navigation = useNavigation()

    return (
        <View>
            {notes.notes.map((data) => {
                return (
                    <View>
                        <NoteButton
                            onPress={() => navigation.navigate('CreateNote', { id: data.id, title: data.title, text: data.text})}
                        >
                            <TitleOfNoteButton numberOfLines={1}>{data.title}</TitleOfNoteButton>
                            <TextOfNoteButton numberOfLines={3}>{data.text}</TextOfNoteButton>
                        </NoteButton>
                        <DivLine />
                    </View>
                )
            })
            }
        </View>
    )
}

export default NotesArea

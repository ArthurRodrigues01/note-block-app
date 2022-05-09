import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import  { DivLine } from '../../Forms/style.js';
import { View, Text } from 'react-native';

// const notes = AsyncStorage.getItem('notes');

var notes = {
    notes: [
        {
            id: 0,
            title: 'titulo 1',
            text: 'Esta manhã estava com meus pais e minha fámilia almoçando foi um almoço agradável, afinal de contas teve de tudo que eu poderia querer, maionese, frango à parmediana, torta de limão e coca cola, nossa, parece até que era o meu dia especial!'
        },
        {
            id: 1,
            title: 'titulo 2',
            text: 'nota 2'
        },
        {
            id: 2,
            title: 'titulo 3',
            text: 'nota 3'
        },
        {
            id: 3,
            title: 'titulo 4',
            text: 'nota 4'
        },
        {
            id: 4,
            title: 'titulo 5',
            text: 'nota 5'
        },
    ]
}
const  NoteButton = styled.TouchableOpacity`
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
    
    return (
        <View>
            {notes.notes.map((data) => {
                return (
                    <View>
                        <NoteButton 
                        // onPress={}
                        >
                            <TitleOfNoteButton  numberOfLines={1}>{data.title}</TitleOfNoteButton>
                            <TextOfNoteButton  numberOfLines={3}>{data.text}</TextOfNoteButton>
                        </NoteButton>
                        <DivLine/>
                    </View>
                )
                })
            }
        </View>
    )
}

export default NotesArea

import React from 'react';
import styled from 'styled-components/native';

const InputNoteTitle = styled.TextInput`
    width: 100%;
    padding: 15px;
    border: 0px;
    /* Previously: border-bottom: 2px solid #fff;*/
    font-size: 25px;
    font-weight: bold;
`
const InputNote = styled.TextInput`
    width: 100%;
    padding: 15px;
    border: 0px;
    font-size: 15px;
    font-weight: 500;
`

const CreateButton = styled.TouchableOpacity`
    border-radius: 50px;
    overflow: visible;
    width: 75px;
    height: 75px;
    position: absolute; /* Previously: position: fixed*/
    right: 15px;
    bottom: 15px;
    background-color: lightblue;
    color: #fff;
`

export { InputNoteTitle, InputNote, CreateButton}
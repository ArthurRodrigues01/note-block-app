import React from 'react';
import { Dimensions }  from 'react-native'; 
import styled from 'styled-components/native';

const WindowWidth = Dimensions.get("window").width
const WindowHeight = Dimensions.get("window").height


const InputNoteTitle = styled.TextInput`
    width: 100%;
    margin-top: 30px;
    padding: 15px;
    border: 0px;
    /* Previously: border-bottom: 2px solid #fff;*/
    font-size: 25px;
    font-weight: bold;
`
const InputNote = styled.TextInput`
    width: ${WindowWidth - 30};
    margin: 15px;
    padding: 15px;
    text-align-vertical: top;
    border: 0.5px solid black;
    font-size: 25px;
    font-weight: 500;
`

const CreateButton = styled.TouchableOpacity`
    border-radius: 50px;
    overflow: visible;
    width: 75px;
    height: 75px;
    position: absolute; /* Previously: position: fixed*/
    align-self: flex-end;
    right: 15px;
    bottom: 15px;
    background-color: lightblue;
    color: #fff;
`
const ButtonContainer = styled.View`
    width: ${WindowWidth};
    height: ${WindowHeight};
    background-color: #FFFFFF00;
    position: absolute;
    top: 0;
    bottom: 0; 
    right: 0; 
    left: 0; 
`

const DivLine = styled.View`
    border: 1px solid gray;
    margin-left: 15px;
    margin-right: 15px;
`
export { InputNoteTitle, InputNote, DivLine}
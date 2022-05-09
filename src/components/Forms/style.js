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

const DivLine = styled.View`
    border: 1px solid gray;
    margin-left: 15px;
    margin-right: 15px;
`
export { InputNoteTitle, InputNote, DivLine}
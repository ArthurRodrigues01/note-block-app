import styled from 'styled-components/native'
import { StatusBar } from 'react-native';

const HeaderBox = styled.View`
    background-color: #Daa424;
    padding: 40px;
    padding-left: 20px;
    margin-top: ${StatusBar.currentHeight};
`
const HeaderTitle = styled.Text` 
    color: #FFFFFF;
    font-size: 35px;
    font-weight: bold;
`

export { HeaderBox }
export { HeaderTitle }
import React from 'react';
import  {HeaderBox, HeaderTitle} from './style.js';


export default props =>
<HeaderBox>
    <HeaderTitle>
        {props.children}
    </HeaderTitle>
</HeaderBox>

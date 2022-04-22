import React from 'react';
import  {FooterBox, FooterTitle} from './style.js';


export default props =>
<FooterBox>
    <FooterTitle>
        {props.children}
    </FooterTitle>
</FooterBox>

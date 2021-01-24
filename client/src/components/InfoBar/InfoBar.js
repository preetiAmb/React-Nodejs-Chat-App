import React from 'react'
import profile from '../../icons/profile.png';
import closeIcon from '../../icons/closeIcon.png';

import { InfoBarStyle, LeftInnerContainer, RightInnerContainer, OnlineIcon} from './InfoBar-style.js';

const InfoBar = ({ room }) => {
    return (
        <InfoBarStyle>
            <LeftInnerContainer>
                <OnlineIcon src={profile} alt="online icon" />
                    <h3>{room}</h3>
            </LeftInnerContainer>
            <RightInnerContainer>
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </RightInnerContainer>
        </InfoBarStyle>
    )
}

export default InfoBar

import React from 'react';

import {
    StyledHeader,
    CloseIcon,
    CloseIconContainer,
    OnlineStatusContainer,
    OnlineIcon
} from './styles';

function Header(props) {
    return(
        <StyledHeader>
            <OnlineStatusContainer>
                <OnlineIcon>
                    <i className="fa fa-circle" aria-hidden="true"></i>
                </OnlineIcon>
                <div>{props.room}</div>
            </OnlineStatusContainer>
            <CloseIconContainer>
                <a href="/">
                    <CloseIcon>
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                    </CloseIcon>
                </a>
            </CloseIconContainer>
        </StyledHeader>
    );
}

export default Header;

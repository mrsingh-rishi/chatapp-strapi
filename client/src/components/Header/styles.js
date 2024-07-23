import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
`;

export const OnlineStatusContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: #fff;
`;

export const CloseIconContainer = styled.div`
    margin-right: 5%;
`

export const OnlineIcon = styled.div`
    color: #11ec11;
    margin-right: 10px
`;

export const CloseIcon = styled.div`
    font-size: 20px;
    color: #fff;
`;

import styled from 'styled-components';
import { List } from 'antd';

export const StyledList = styled(List)`
    margin-right: 10px;
    flex: 0 0 35%;
    padding: 20px;
    .ant-list-item-meta-content {
        flex-grow: 0;
    }
    h4 {
        font-size: 25px;
    }
    a {
        color: #097ef0;
    }
`;

export const ListHeading = styled.div`
    color: #757591;
    font-size: 20px;
    font-style: oblique;
    border-bottom: 1px solid #757591;
`;

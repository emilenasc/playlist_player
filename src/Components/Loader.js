import React from 'react'
import styled from 'styled-components'

const LoaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8em;
`;

const Loader = () => {
    return (
        <LoaderDiv>
            <box-icon name='music' type='solid' animation='tada' flip='horizontal' color='#eae9e9' ></box-icon>
            <p>Loading...</p>
        </LoaderDiv>
    )
}

export default Loader
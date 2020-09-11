import React from 'react';
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
	background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

export const Button = (props) => {
	return (
		<StyledButton>
			{props.children}
		</StyledButton>
	);
};

export default Button;

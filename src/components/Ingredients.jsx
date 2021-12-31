import styled from '@emotion/styled';
import { useState } from 'react';

export const Ingredients = ({ text }) => {
	// instructions
	const [check, setCheck] = useState(false);

	const handleChangeCheck = () => {
		setCheck(!check);
	};

	return (
		<Container>
			<Input type="checkbox" checked={check} onChange={handleChangeCheck} />
			<Text
				dangerouslySetInnerHTML={{ __html: text }}
				check={check}
				// onClick={handleChangeCheck}
			></Text>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 19fr;
	column-gap: 0.5rem;
	/* align-items: center; */
`;

const Input = styled.input`
	display: inline-block;
	width: 21px;
	height: 21px;
	accent-color: #f2994a;
	cursor: pointer;
`;

const Text = styled.p`
	text-decoration: ${({ check }) => (check ? 'line-through wavy #F2994A' : 'none')};
	font-size: 0.875rem;
	color: #333333;
	padding: 0.2rem;
	margin-top: 0;
	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

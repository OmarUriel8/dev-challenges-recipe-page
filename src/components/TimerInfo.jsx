import styled from '@emotion/styled';
import React from 'react';

export const TimerInfo = ({ title, time }) => {
	return (
		<Container>
			<Icon className="material-icons-outlined">query_builder</Icon>
			<div>
				<Heading>{title}</Heading>
				<TextInfo>{time}</TextInfo>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
`;
const Icon = styled.span`
	color: #4f4f4f;
`;
const Heading = styled.h4`
	font-size: 0.5rem;
	font-weight: 700;
	color: #bdbdbd;
	text-transform: uppercase;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 0.625rem;
	}
`;

const TextInfo = styled.p`
	color: #333333;
	font-weight: 500;
	font-size: 0.625rem;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 0.875rem;
	}
`;

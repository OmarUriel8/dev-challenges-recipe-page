import styled from '@emotion/styled';
import React from 'react';
import { TimerInfo } from './TimerInfo';

export const CardTime = () => {
	return (
		<Aside>
			<Header>
				<span className="material-icons-outlined">restaurant_menu</span>
				<div>
					<h4>Yields</h4>
					<p>12 servings</p>
				</div>
			</Header>
			<ContainerTime>
				<TimerInfo title="Prep TIme" time="45 minutes" />
				<TimerInfo title="Cook Time" time="1 hour" />
				<TimerInfo title="Total Time" time="7,75 hours" />
			</ContainerTime>
		</Aside>
	);
};
const Aside = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	order: -1;
	@media (min-width: 768px) {
		padding: 2rem;
		border-radius: 0.75rem;
		box-shadow: 0px 0px 20px 0px #0000001a;
		order: 1;
		align-self: flex-start;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 0.5rem;
	span {
		color: #f2994a;
	}
	h4 {
		font-size: 0.5rem;
		color: #bdbdbd;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0;
		@media (min-width: 768px) {
			font-size: 0.625rem;
		}
	}
	p {
		margin: 0;
		font-size: 0.625rem;
		font-weight: 500;
		color: #f2994a;
		@media (min-width: 768px) {
			font-size: 0.875rem;
		}
	}
`;

const ContainerTime = styled.div`
	display: flex;
	gap: 1rem;

	@media (min-width: 768px) {
		flex-direction: column;
	}
`;

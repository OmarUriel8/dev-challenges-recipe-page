import styled from '@emotion/styled';

export const Footer = () => {
	return (
		<FooterContainer>
			<div>Source: https://sallysbakingaddiction.com/classic-cheesecake/</div>
			<div>
				Created by{' '}
				<b>
					<a
						href="https://devchallenges.io/portfolio/OmarUriel8"
						rel="noopener noreferrer"
					>
						OmarUriel8
					</a>
				</b>{' '}
				-{' '}
				<a href="https://devchallenges.io/" rel="noopener noreferrer">
					devChallenges.io
				</a>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	color: #a9a9a9;
	text-align: center;
	margin: 4rem 0;
	font-size: 0.875rem;

	b {
		text-decoration: underline;
	}
	a {
		color: #a9a9a9;
		text-decoration: none;
	}
	div {
		margin-bottom: 2rem;
	}
`;

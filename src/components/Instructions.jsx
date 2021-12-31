import styled from '@emotion/styled';

export const Instructions = ({ text, num }) => {
	return (
		<Container>
			<Box>{num}</Box>
			<ContainerText dangerouslySetInnerHTML={{ __html: text }}></ContainerText>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 19fr;
	column-gap: 0.5rem;
	/* align-items: center; */
`;

const Box = styled.p`
	width: 2.25rem;
	height: 2.25rem;
	text-align: center;
	background-color: #f2994a;
	border-radius: 0.39rem;
	color: #fff;
	font-family: 'Playfair Display', serif;
	font-size: 1.5rem;
	font-weight: 700;
`;

const ContainerText = styled.p`
	font-size: 1rem;
	line-height: 1.5rem;
	padding: 0.5rem;
	margin-bottom: 0;
`;

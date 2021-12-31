import styled from '@emotion/styled';
import { CardTime } from '../components/CardTime';
import { Footer } from '../components/Footer';
import { Ingredients } from '../components/Ingredients';
import { Instructions } from '../components/Instructions';

import { ingredients1, ingredients2, instructions } from '../data';
import imagePoints from '../images/6dots.svg';
import imageCake from '../images/photo1.png';

export const RecipePage = () => {
	return (
		<>
			<Container>
				<Title>Classic Cheesecake Recipe</Title>

				<AbstractContainer>
					<img src={imagePoints} alt="Icon" />
					<Abstract>
						Look no further for a creamy and ultra smooth classic cheesecake recipe!
						Paired with a buttery graham cracker crust, no one can deny its simple
						decadence. For the best results, bake in a water bath.
					</Abstract>
				</AbstractContainer>

				<Image src={imageCake} />

				<ContainerRecipe>
					<section>
						<h2>Ingredients</h2>

						<h3>{ingredients1.name}</h3>

						{ingredients1.arr.map((item) => (
							<Ingredients text={item} />
						))}

						<h3>{ingredients2.name}</h3>

						{ingredients2.arr.map((item) => (
							<Ingredients text={item} />
						))}

						<h2>Instructions</h2>

						{instructions.arr.map((item, i) => (
							<Instructions text={item} num={i + 1} />
						))}
					</section>

					<CardTime />
				</ContainerRecipe>
			</Container>
			<Footer />
		</>
	);
};

const Container = styled.div`
	max-width: 50rem;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;

const Title = styled.h1`
	margin-bottom: 0.5rem;
`;

const AbstractContainer = styled.div`
	display: flex;
	column-gap: 0.5rem;
	align-items: start;
	margin-bottom: 2rem;
	img {
		margin-top: 0.5rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
`;

const Abstract = styled.p`
	margin: 0;
	font-style: italic;
	color: #4f4f4f;
	font-size: 0.75rem;
	font-weight: 500;
	@media (min-width: 768px) {
		font-size: 0.875rem;
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

const ContainerRecipe = styled.main`
	margin: 2rem 0;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 1rem;
	column-gap: 5rem;
	@media (min-width: 768px) {
		grid-template-columns: 7fr 3fr;
	}
`;

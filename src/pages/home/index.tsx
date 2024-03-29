import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
	const categorys = [
		{ id: 1, value: "useDefferedValue Hook" },
		{ id: 2, value: "what is forwardRef" },
		{ id: 3, value: "what is ReactQuery" },
		{ id: 4, value: "MobX" },
		{ id: 5, value: "Drag Scroll" },
		{ id: 6, value: "Msw Test" },
		{ id: 7, value: "playground" },
	];

	const navigate = useNavigate();

	const goToCategory = (categoryId: number) => {
		switch (categoryId) {
			case 1:
				navigate(`/useDefferedValue`);
				break;
			case 2:
				navigate(`/forwardRef`);
				break;
			case 3:
				navigate(`/reactQuery`);
				break;
			case 4:
				navigate(`/mobX`);
				break;
			case 5:
				navigate(`/dragScroll`);
				break;
			case 6:
				navigate(`/mswTest`);
				break;
			case 7:
				navigate(`/playground`);
				break;
		}
	};

	return (
		<HomeContainer>
			<PageHeader>React-playground</PageHeader>
			update test
			<ContentsSection>
				{categorys.map(({ id, value }) => (
					<Category key={`${id}${value}`} onClick={() => goToCategory(id)}>
						{value}
					</Category>
				))}
			</ContentsSection>
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.section`
	width: 100vw;
	height: 100vh;
`;

const PageHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightgray;
	height: 50px;
	font-size: 25px;
`;

const ContentsSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Category = styled.p`
	margin-top: 20px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

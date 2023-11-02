import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.jpg";

const THRESHOLD_HEIGHT = window.innerHeight / 1.25;

const Scroll = () => {
	const imageWrapperRef = useRef<HTMLDivElement>(null);
	const [slideWidth, setSlideWith] = useState(1);
	const [imageOpacity, setImageOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			if (imageWrapperRef.current) {
				const imageRect = imageWrapperRef.current.getBoundingClientRect();
				if (imageRect.top + imageRect.height / 2 <= THRESHOLD_HEIGHT) {
					setSlideWith((window.scrollY - imageRect.top) * 0.6);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		setImageOpacity(1 - slideWidth / 1000);
	}, [slideWidth]);

	return (
		<Container>
			<Section1 />
			<ImageWrpper ref={imageWrapperRef}>
				<Divider style={{ left: Math.min(700, Math.max(0, slideWidth)) }} />

				<OpacityWrapper style={{ opacity: imageOpacity }}>
					<Image1 src={Banner1} />
				</OpacityWrapper>

				<Blinder style={{ width: slideWidth }}>
					<Image2 src={Banner2} $iszIndex={slideWidth > 50} />
				</Blinder>
			</ImageWrpper>
			<Section2 />
		</Container>
	);
};

export default Scroll;

const Container = styled.div`
	width: 700px;
	display: flex;
	flex-direction: column;
`;

const ImageWrpper = styled.div`
	position: relative;
	height: 200px;
	overflow: hidden;
`;

/* 그냥 막대기다 */
const Divider = styled.div`
	position: absolute;
	height: 200px;
	width: 5px;
	background-color: lightgray;
	z-index: 3;
	border-left: 1px solid gray;
	border-right: 1px solid gray;
`;

const OpacityWrapper = styled.div`
	position: absolute;
	width: 700px;
	height: 200px;
	background-color: black;
	z-index: 2;
`;

/* 이미지2를 잠깐 가려주는 (?) 컴포넌트이다. 계산된 어떤 값에 의해 width가 점점 늘어날것이다
자식 컴포넌트인 Image2는 overflow: hidden 속성에 의해 고정 px 값이지만 보이지 않을것 
*/
const Blinder = styled.div`
	position: absolute;
	height: 200px;
	overflow: hidden;
`;

const Image1 = styled.img`
	position: absolute;
	width: 700px;
	height: 200px;
	z-index: 2;
`;

/* boolean props $iszIndex가 true가 되면 z-index 값 2를 가지며 Image1위로 올라올것!!
아직은 Image1뒤에 숨겨져 있는 상태일 것이다.
*/
const Image2 = styled.img<{ $iszIndex: boolean }>`
	position: absolute;
	width: 700px;
	height: 200px;
	z-index: ${(props) => props.$iszIndex && 3};
`;

const Section1 = styled.div`
	background-color: blue;
	height: 130vh;
`;

const Section2 = styled.div`
	background-color: red;
	height: 130vh;
`;

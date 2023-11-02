import { useState } from "react";
import styled from "styled-components";

import Post from "./post";
import Posts from "./posts";

const ReactQuery = () => {
	const [postId, setPostId] = useState(-1);

	return (
		<Container>
			{postId > -1 ? <Post postId={postId} setPostId={setPostId} /> : <Posts setPostId={setPostId} />}
		</Container>
	);
};

export default ReactQuery;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

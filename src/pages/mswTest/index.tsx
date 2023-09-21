import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type PostType = { id: number; author: string; content: string };

const MswTest = () => {
	const [posts, setPosts] = useState<PostType[]>();

	const [inputForm, setInputForm] = useState({ author: "", content: "" });

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setInputForm((prev) => ({ ...prev, [id]: value }));
	};

	const getPosts = async () => {
		await axios.get("/posts").then((res) => {
			setPosts(res.data);
		});
	};

	const sendMyPost = async () => {
		await axios.post("/posts", { author: inputForm.author, content: inputForm.content }).then((res) => {
			console.log(res);
			getPosts();
		});
	};

	useEffect(() => {
		getPosts();
	}, []);

	console.log(posts);

	return (
		<>
			<PostsContainer>
				{posts?.map(({ id, author, content }) => (
					<Post key={id}>
						<p>Author: {author}</p>
						<p>Content: {content}</p>
					</Post>
				))}
			</PostsContainer>
			<InputForm>
				<label>author</label>
				<AuthorInput id="author" onChange={onChange} value={inputForm.author} />
				<label>Content</label>
				<ContentInput id="content" onChange={onChange} value={inputForm.content} />
				<button onClick={sendMyPost}>Send!</button>
			</InputForm>
		</>
	);
};

export default MswTest;

const PostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	gap: 20px;
	margin-bottom: 20px;
`;

const Post = styled.div`
	width: 500px;
	height: 40px;
	border: 1px solid black;
	padding: 3px;
`;

const InputForm = styled.div`
	display: flex;
	flex-direction: column;
`;

const AuthorInput = styled.input``;

const ContentInput = styled.input``;

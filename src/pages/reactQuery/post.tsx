import React from "react";
import { instance as axios } from "../../api/config";
import { useQuery } from "@tanstack/react-query";

interface Props {
	postId: number;
	setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const Post = ({ postId, setPostId }: Props) => {
	const getPostById = async (id: number) => {
		const res = await axios.get(`posts/${id}`);
		return res.data;
	};

	const { isLoading, isFetching, error, data } = useQuery(["post", postId], () => getPostById(postId), {
		enabled: !!postId,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error instanceof Error) return <div>{error.message}</div>;

	return (
		<div>
			<a onClick={() => setPostId(-1)} href="#">
				Back
			</a>
			<h1>{data?.title}</h1>
			<div>
				<p>{data?.body}</p>
			</div>
			{isFetching && <div>Background updating...</div>}
		</div>
	);
};

export default Post;

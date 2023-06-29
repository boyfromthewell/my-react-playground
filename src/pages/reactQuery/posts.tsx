import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { instance as axios } from "../../api/config";

interface Props {
	setPostId: React.Dispatch<React.SetStateAction<number>>;
}

interface PostType {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const Posts = ({ setPostId }: Props) => {
	const queryClient = useQueryClient();

	const getPosts = async () => {
		const res = await axios.get("posts");
		return res.data;
	};

	const { isLoading, error, data } = useQuery(["posts"], getPosts);
	console.log(data);

	if (isLoading) return <div>Loading...</div>;
	if (error instanceof Error) return <div>{error.message}</div>;

	return (
		<div>
			{data?.map((post: PostType) => (
				<p key={post.id}>
					<a
						onClick={() => setPostId(post.id)}
						href="#"
						style={queryClient.getQueryData(["post", post.id]) ? { fontWeight: "bold", color: "green" } : {}}
					>
						{post.title}
					</a>
				</p>
			))}
		</div>
	);
};

export default Posts;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

	const { mutate, isSuccess } = useMutation((post: any) => axios.post("/posts", { post }), {
		onSuccess: () => queryClient.invalidateQueries(["posts"]),
	});

	if (isLoading) return <div>Loading...</div>;
	if (error instanceof Error) return <div>{error.message}</div>;

	return (
		<div>
			<button
				onClick={() => /* 뮤테이트 호출 시 인자로 넘겨준 함수 실행 */ mutate({ userId: 1, body: "bar", title: "foo" })}
			>
				Add Post
			</button>
			{isSuccess ? <div>Todo added!</div> : null}

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

import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const ReactQuery = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: () => fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json()),
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{`An error has occured: ${error}`}</div>;
	return (
		<Container>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
		</Container>
	);
};

export default ReactQuery;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

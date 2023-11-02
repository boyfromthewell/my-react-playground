import { rest } from "msw";

const posts = [
	{
		id: 1,
		author: "kwon",
		content: "content1",
	},
	{
		id: 2,
		author: "lee",
		content: "content2",
	},
	{
		id: 3,
		author: "yoon",
		content: "content3",
	},
];

export const handlers = [
	rest.get("/posts", async (_req, res, ctx) => {
		return res(ctx.json(posts));
	}),

	rest.post<{ id: number; author: string; content: string }>("/posts", async (req, res, ctx) => {
		console.log(req);
		const { author, content } = await req.json();
		const id = new Date().getTime();
		const newPost = { id, author, content };

		posts.push(newPost);

		return res(ctx.status(201), ctx.delay(700));
	}),
];

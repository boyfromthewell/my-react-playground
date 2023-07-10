import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "../../hooks/useStore";
import TodoLists from "./todoLists";
import styled from "styled-components";
import TodoForm from "./todoForm";
import Counter from "./counter";

const MobX = observer(() => {
	const [content, setContent] = useState("");
	const { TodoList } = useStore();

	const removeItem = (id: number) => {
		TodoList.removeTodo(id);
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		TodoList.addTodo(content);
		setContent("");
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	return (
		<>
			<TodoListContainer>
				{TodoList.todoData?.map((v) => (
					<TodoLists key={v.id} id={v.id} content={v.content} removeItem={removeItem} />
				))}
			</TodoListContainer>
			<TodoForm onSubmit={onSubmit} onChange={onChange} content={content} />
			<Counter />
		</>
	);
});

export default MobX;

const TodoListContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

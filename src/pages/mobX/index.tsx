import React, { useState } from "react";
import { observer } from "mobx-react";
import { TodoList } from "../../stores/todo";
import useStore from "../../hooks/useStore";

const MobX = observer(() => {
	const [content, setContent] = useState("");
	/* const { todoData, addTodo } = TodoList; */
	const { TodoList } = useStore(); // 무슨 차이??

	console.log(TodoList);

	const removeItem = (ix: any) => {
		TodoList.removeTodo(ix);
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		TodoList.addTodo(content);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	return (
		<>
			<section>
				{TodoList.todoData?.map((v) => (
					<div key={v.id}>
						<input type="checkbox" />
						<span>{v.content}</span>
						<span onClick={() => removeItem(v.id)}>x</span>
					</div>
				))}
			</section>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} />
				<button>dddd</button>
			</form>
		</>
	);
});

export default MobX;

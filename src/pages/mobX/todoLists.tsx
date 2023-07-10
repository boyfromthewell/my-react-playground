import React from "react";

interface TodoListsProps {
	id: number;
	content: string;
	removeItem: (id: number) => void;
}

const TodoLists = ({ id, content, removeItem }: TodoListsProps) => {
	return (
		<div>
			<input type="checkbox" />
			<span>{content}</span>
			<button onClick={() => removeItem(id)}>X</button>
		</div>
	);
};

export default TodoLists;

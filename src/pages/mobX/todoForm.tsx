import React from "react";

interface TodoFormProps {
	onSubmit: (e: React.FormEvent) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	content: string;
}

const TodoForm = ({ onSubmit, onChange, content }: TodoFormProps) => {
	return (
		<form onSubmit={onSubmit}>
			<input onChange={onChange} value={content} />
			<button>등록</button>
		</form>
	);
};

export default TodoForm;

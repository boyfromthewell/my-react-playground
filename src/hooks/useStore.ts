import { TodoList } from "../stores/todo";
import { CounterState } from "../stores/counter";

const useStore = () => {
	return { TodoList, CounterState };
};

export default useStore;

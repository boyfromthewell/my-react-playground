import { observable } from "mobx";

interface CounterStateType {
	num: number;
	plusNum: () => void;
	minusNum: () => void;
}
export const CounterState = observable<CounterStateType>({
	num: 0,

	plusNum() {
		this.num++;
	},

	minusNum() {
		if (this.num === 0) return;
		this.num--;
	},
});

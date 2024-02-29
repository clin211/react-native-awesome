import {create} from 'zustand';

type State = {
    count: number;
};

type Action = {
    increment: (num: number) => void;
    decrement: (num: number) => void;
    reset: () => void;
};

const useCounterStore = create<State & Action>(set => ({
    count: 0,
    increment: num => set(state => ({count: state.count + num})),
    decrement: num => set(state => ({count: state.count - num})),
    reset: () => set({count: 0}),
}));

export default useCounterStore;

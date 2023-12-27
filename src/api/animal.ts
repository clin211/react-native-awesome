import { sleep } from '@/utils/util';

export const animals = async () => {
    try {
        const response = await fetch('https://61c48e65f1af4a0017d9966d.mockapi.io/animals');
        if (!response.ok) return;
        const result = await response.json();
        return result;
        console.log('response', result);
    } catch (error) {}
};

export const fetchTodo = async () => {
    try {
        await sleep(3000);
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!result.ok) return null;
        return await result.json();
    } catch (error) {}
};

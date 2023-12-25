export const animals = async () => {
    try {
        const response = await fetch('https://61c48e65f1af4a0017d9966d.mockapi.io/animals');
        if (!response.ok) return;
        const result = await response.json();
        return result;
        console.log('response', result);
    } catch (error) {}
};

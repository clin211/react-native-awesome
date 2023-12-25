export function percent(rebate: number | string) {
    return (100 - Number(rebate)) / 100;
}

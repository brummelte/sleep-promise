declare function sleep<T = any>(timeout: number): Promise<T> & ((value: T) => T);

export default sleep;

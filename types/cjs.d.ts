declare namespace sleep {
    // Allow usage of a CJS module
}

declare function sleep<T = any>(timeout: number): Promise<T> & ((value: T) => T);

export = sleep;

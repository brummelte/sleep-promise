export interface SleepOptions {
    useCachedSetTimeout?: boolean;
}

export interface SleepPromise<T> extends Promise<T> {
    cancel(): void;
    cancelled?: boolean;
}

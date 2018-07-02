import { SleepOptions, SleepPromise } from './shared';

declare namespace sleep {
    // Allow usage of a CJS module
}

declare function sleep<T = any>(
    timeout: number,
    options?: SleepOptions,
): SleepPromise<T> & ((value: T) => T);

export = sleep;

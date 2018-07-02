import { SleepOptions, SleepPromise } from './shared';

declare function sleep<T = any>(
    timeout: number,
    options?: SleepOptions,
): SleepPromise<T> & ((value: T) => T);

export default sleep;

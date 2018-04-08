declare namespace sleep {
    // allows for import * as sleep from "sleep-promise";
}

declare function sleep<T = any>(
    timeout: number
): Promise<T> & ((value: T) => T);

export = sleep;

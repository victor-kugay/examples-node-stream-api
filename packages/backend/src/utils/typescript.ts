export type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredByKeys<T, K extends keyof T> = Required<
  Pick<T, Extract<keyof T, K>>
> &
  Omit<T, Extract<keyof T, K>>;

export type GetOptionalKeys<T> = {
  [K in keyof T as undefined extends T[K] ? K : never]: T[K];
};
export type GetRequiredKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

export type Result<T, E> = {result: 'success'; value: T} | {result: 'error'; error: E};

export type SafePick<T, K extends keyof T> = Pick<T, K> & {
  [P in Exclude<keyof T, K>]?: never;
};

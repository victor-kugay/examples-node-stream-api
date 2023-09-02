export interface Flushable {
  flush: (input: unknown) => unknown;
}

export abstract class DataSource<TConnection = unknown> implements Flushable {
  abstract connection: TConnection;

  abstract flush: (input: unknown) => unknown;

  abstract initialize: () => void;
}

export * from '.';

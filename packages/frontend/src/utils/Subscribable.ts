export type Subscriber<State> = (s: State) => void;

export class Subscribable<State> {
  private readonly listeners = new Set<Subscriber<State>>();

  protected state: State;

  constructor(initialState: State) {
    this.state = initialState;
  }

  public getState = (): State => {
    return this.state;
  };

  public setState = (state: Partial<State>): State => {
    this.state = {...this.state, ...state};

    this.listeners.forEach((l) => {
      l(this.state);
    });

    return this.state;
  };

  public subscribe = (listener: Subscriber<State>) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
}

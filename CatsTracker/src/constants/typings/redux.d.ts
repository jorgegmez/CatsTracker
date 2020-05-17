interface Action {
  type: string;
  payload: Payload;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StateType<TReducerOrMap extends any> = ReturnType<TReducerOrMap>;
type reducerTypes = StateType<typeof import('@state/reducers').default>;
// eslint-disable-next-line
  interface RootState extends reducerTypes {}
// interface RootState extends reducerTypes {}

interface DispatchRSSA {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Payload, Meta>(action: RSAAAction<any, Payload, Meta>): Promise<
    RSAAResultAction<Payload, Meta>
  >;
  // `Promise<undefined> is returned in case of RSAA validation errors or user bails out
  (action: RSAAAction): Promise<undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RSAAActionAuthorized<State = any, Payload = any, Meta = any> {
  [typeof import('@middlewares').RSAA_AUTH]: RSAACall<State, Payload, Meta>;
}

interface ReduxStateErrorModel {
  ok: boolean;
  text?: string;
}

interface ReduxStateModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  pending: boolean;
  error: ReduxStateErrorModel;
}

/* eslint-disable-next-line */
declare const global: any;

interface RSSAFluxResponse {
  error: boolean;
  meta: object;
  payload: {
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any;
  };
  type: string;
}

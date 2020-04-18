import { NowRequest, NowResponse } from '@now/node';

export default function handler(
  request: NowRequest,
  response: NowResponse,
): void {
  response.json({ hello: 'World!' });
}

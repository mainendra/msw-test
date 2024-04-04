import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest';

export const server = setupServer();
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

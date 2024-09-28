import { doYouLikeTypeScript } from '../src/main';

test('Do You Like TypeScript', () => {
  expect(doYouLikeTypeScript()).toEqual('Yes');
});

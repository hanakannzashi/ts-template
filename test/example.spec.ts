import { doYouLikeTypeScript, YesOrNo } from '../src/example';

test('Do You Like TypeScript', () => {
  expect<YesOrNo>(doYouLikeTypeScript()).toEqual<YesOrNo>('Yes');
});

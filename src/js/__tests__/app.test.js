import GameSavingLoader from '../app';

jest.setTimeout(15000);

test('тестируем асиинхронный метод', async () => {
  expect.assertions(1);
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  await GameSavingLoader.load().then((resp) => expect(resp).toEqual(expected));
});

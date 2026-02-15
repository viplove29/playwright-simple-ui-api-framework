const { test, expect, request } = require('@playwright/test');

test('API Test - JSONPlaceholder', async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
  });

  const response = await apiContext.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
});

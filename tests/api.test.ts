// tests/api.test.js
const { test, expect } = require('@playwright/test');

test.describe('CRUD API Tests', () => {
  let itemId;

  test('Create an item', async ({ request }) => {
    const response = await request.post('/api/create', {
      data: {
        name: 'Test Item',
        value: 'Test Value',
      },
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Test Item');
    expect(responseBody.value).toBe('Test Value');
    itemId = responseBody.id;
    console.log("Test1")
  });

  test('Read all items', async ({ request }) => {
    const response = await request.get('/api/read');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
    console.log("Test1")
  });
  test('Create an item get', async ({ request }) => {
    const response = await request.get('/api/read');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
    console.log("Test1")
  });

});








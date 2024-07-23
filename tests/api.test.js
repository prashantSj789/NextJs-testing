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
  });

  test('Read all items', async ({ request }) => {
    const response = await request.get('/api/read');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.length).toBeGreaterThan(0);
    expect(responseBody.find(item => item.id === itemId)).toBeDefined();
  });

});








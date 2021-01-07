export const postExampleSchema = {
  validate: jest.fn((body) => ({
    error: !body || !body.example,
    value: body,
  })),
};

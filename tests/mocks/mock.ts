export const authMock = () => {
  jest.mock('../../src/middlewares/serviceAuth', () => ({
    serviceAuth: (req: any, res: any, next: any) => next(),
  }));

  jest.mock('../../src/middlewares/auth', () => ({
    verifyToken: (req: any, res: any, next: any) => {
      req.token = 'test-token';
      next();
    },
  }));
};

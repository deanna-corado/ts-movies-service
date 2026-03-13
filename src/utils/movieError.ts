export class MovieError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    //call parent con structor
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidMovieIDError extends MovieError {
  constructor() {
    super('Invalid movie ID', 400);
  }
}

export class MovieNotFoundError extends MovieError {
  constructor() {
    super('Movie not found', 404);
  }
}

export class ErrTokenExpired extends MovieError {
  constructor() {
    super('Token expired', 401);
  }
}

export class ErrInvalidToken extends MovieError {
  constructor() {
    super('Invalid auth token', 401);
  }
}

export class ErrMissingToken extends MovieError {
  constructor() {
    super('Missing token', 401);
  }
}

export class ErrUnauthorizedService extends MovieError {
  constructor(message: string = 'Invalid service credentials') {
    super(message, 401);
  }
}
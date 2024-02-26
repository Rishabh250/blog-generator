/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction } from "express";

declare global {
    namespace Express {
      export interface Response {
        postRequest: () => Response;
        getRequest: (data: any) => Response;
        updated: () => Response;
        badRequest: (error: any) => Response;
        unAuthorized: () => Response;
        forbidden: () => Response;
        notFound: () => Response;
        serverError: () => Response;
      }

      export interface Request {
        user: {
          userId: string;
        };
      }
    }
  }

export function responseMiddleware(req: Request, res: Response, next: NextFunction): void;

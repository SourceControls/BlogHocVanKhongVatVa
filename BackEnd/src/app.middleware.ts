import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RemoveUndefinedQueryMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const queryParams = req.query;

    // Tạo một object mới để lưu trữ các query parameters hợp lệ (không bằng undefined)
    const validQueryParams = {};

    // Lặp qua tất cả các query parameters
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        const value = queryParams[key];

        // Kiểm tra nếu giá trị của query parameter không phải là undefined
        if (
          value == undefined ||
          value == 'undefined' ||
          value == '' ||
          value == null ||
          value == 'null'
        ) {
          delete queryParams[key];
        }
      }
    }

    next();
  }
}

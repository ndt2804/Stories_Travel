import { Request, Response } from 'express';

export function homeController(req: Request, res: Response) {
    res.send('Hello from HomeController 1');
}

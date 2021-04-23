import {Router, Request, Response} from "express";

export class HelloController {
  router = Router()

  constructor() {
    this.router.get('/', this.hello)
  }

  hello = (req: Request, res: Response) => res.json({msg: 'hello'});
}

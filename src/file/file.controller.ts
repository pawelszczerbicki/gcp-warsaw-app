import {Request, Response, Router} from "express";
import {FileService} from "./file.service";

export class FileController {
  router = Router()
  fileService = new FileService();

  constructor() {
    this.router.get('/file', this.file)
  }

  file = (req: Request, res: Response) => this.fileService.fetch().then(r => res.json(r));
}


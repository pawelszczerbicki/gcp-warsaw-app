import express from "express";
import {HelloController} from "./hello/hello.controller";
import {FileController} from "./file/file.controller";

const controllers = [new HelloController(), new FileController()].map(c => c.router);

express().use('/', controllers).listen(process.env.PORT || 3000)

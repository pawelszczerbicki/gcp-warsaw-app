import {Storage} from "@google-cloud/storage";

const gs = new Storage()
const file = "test.json"

export class FileService {
  fetch = () => gs.bucket(process.env.BUCKET).file(file)
      .save(JSON.stringify({date: Date.now()}), {contentType: 'application/json'})
      .then(() => gs.bucket(process.env.BUCKET).file(file).download())
      .then(r => JSON.parse(r[0].toString('utf-8')))
}

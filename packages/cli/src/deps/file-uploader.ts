import fs from 'fs';
import FormData from 'form-data';
import {AxiosInstance} from 'axios';

export class FileUploader {
  constructor(
    private readonly assetsPath: string,
    private readonly axios: AxiosInstance,
  ) {}

  async upload(): Promise<void> {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(this.assetsPath));
    const {data} = await this.axios.put('/upload', formData);
    console.log(data);
  }
}

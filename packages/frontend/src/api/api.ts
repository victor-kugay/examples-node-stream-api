import {Axios} from 'axios';
import {injected} from 'brandi';
import {DI_TOKENS} from '../di/tokens';

export class Api {
  constructor(private readonly axios: Axios) {}

  public uploadFile = async (file: File): Promise<void> => {
    const formData = new FormData();
    formData.append('file', file);
    await this.axios.put('/upload', formData);
  };
}

injected(Api, DI_TOKENS.axios);

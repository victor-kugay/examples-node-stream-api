import {Container} from 'brandi';
import {DI_TOKENS} from './tokens';
import axios, {Axios} from 'axios';
import {Api} from '../api/api';

export function createDiContainer(): Container {
  const container = new Container();

  container
    // prettier-ignore
    .bind(DI_TOKENS.axios)
    .toInstance(axiosFactory)
    .inSingletonScope();

  container
    // prettier-ignore
    .bind(DI_TOKENS.api)
    .toInstance(Api)
    .inSingletonScope();

  return container;
}

function axiosFactory(): Axios {
  return axios.create({
    baseURL: 'http://localhost:3000',
  });
}

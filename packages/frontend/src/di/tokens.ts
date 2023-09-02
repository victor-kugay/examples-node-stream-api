import {Axios} from 'axios';
import {token} from 'brandi';
import {Api} from '../api/api';

export const DI_TOKENS = {
  axios: token<Axios>('axios'),
  api: token<Api>('api'),
};

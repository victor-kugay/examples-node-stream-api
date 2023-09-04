import {AssetsGenerator} from './assets-generator';
import {ASSETS_PATH, BASE_URL} from '../constants';
import {FileUploader} from './file-uploader';
import axios from 'axios';

const axiosInstance = axios.create({baseURL: BASE_URL});

export const assetsGenerator = new AssetsGenerator(ASSETS_PATH);

export const fileUploader = new FileUploader(ASSETS_PATH, axiosInstance);

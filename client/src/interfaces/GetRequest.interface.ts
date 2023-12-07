import { AxiosRequestConfig } from "axios";

export interface IGetRequestConfig extends AxiosRequestConfig {
  cancelCallback?: (reason?: string) => void;
}
export interface IGetRequestErrorMessage {
  error: {
    response: {
      data: {
        message: string;
      };
    };
  };
}
export interface IGetRequestResponse {
  email: string;
  number: string;
}

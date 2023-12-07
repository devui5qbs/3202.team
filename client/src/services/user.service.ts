import axios, { CancelTokenSource } from "axios";
import {
  IGetRequestConfig,
  IGetRequestErrorMessage,
} from "../interfaces/GetRequest.interface";

let cancelTokenSource: CancelTokenSource | null = null;

const get = async <T>(
  config: IGetRequestConfig
): Promise<T | { canceled: true } | { message: string }> => {
  try {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Request canceled by a new request");
    }

    cancelTokenSource = axios.CancelToken.source();

    const response = await axios({
      cancelToken: cancelTokenSource.token,
      ...config,
    });

    return response.data;
  } catch (error: IGetRequestErrorMessage | any) {
    if (axios.isCancel(error)) {
      console.log("The request was canceled");
      return { canceled: true } as { canceled: true };
    } else if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      console.error(
        `Error while executing the query: ${error.response.data.message}`
      );
      throw new Error(error.response.data.message);
    } else {
      console.error("Unknown error during query execution");
      return { message: "An unexpected error occurred." } as {
        message: string;
      };
    }
  }
};

export const UserService = { get };

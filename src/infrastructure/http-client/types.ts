export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export interface HttpClientConfig {
    url?: string;
    method?: Method | string;
    baseURL?: string;
    headers?: any;
    params?: any;
    data?: any;
}

export interface GetAttributes {
  url: string,
  config?: HttpClientConfig;
}

export interface PostAttributes {
  url: string,
  data?: any,
  config?: HttpClientConfig;
}

export type PutAttributes = PostAttributes;
export type DeleteAttributes = GetAttributes;

export interface HttpClientDef {
  get(data: GetAttributes): Promise<any>;
  post(data: PostAttributes): Promise<any>;
  put(data: PutAttributes): Promise<any>;
  delete(data: DeleteAttributes): Promise<any>;
}

export interface Response<T = any> {
  data: T;
  message: string;
  success:boolean
}

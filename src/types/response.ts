export interface SuccessResponse {
  status: 'success';
}

export interface ErrorResponse {
  status: 'error';
  message: string;
}

export type ApiResponse = SuccessResponse | ErrorResponse;

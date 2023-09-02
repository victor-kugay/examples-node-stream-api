export interface IDomainError {
  code: string;
  message: string;
  details?: string;
}

export type DomainError = undefined;

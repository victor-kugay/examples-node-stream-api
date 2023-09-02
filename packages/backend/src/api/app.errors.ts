import {DomainError} from '../domain/errors';

export const convertDomainToHttpErrors = (domainError: DomainError): DomainError => {
  return domainError;
};

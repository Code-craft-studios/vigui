import { RequiredEnvError } from '@/lib/errors';

export const getEnvOrThrow = (envName: string) => {
  const result = process.env[envName];

  if (!result) throw new RequiredEnvError(envName);

  return result;
};

export const throwEnvErrorIfNill = (envName: string, envValue?: string) => {
  if (!envValue) throw new RequiredEnvError(envName);

  return envValue;
};

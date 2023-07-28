import { RequiredEnvError } from "@/lib/errors"

export const getEnvOrThrow = (envName: string)=>{
  const result = process.env[envName]

  if(!result)
    throw new RequiredEnvError(envName);

  return result;
}

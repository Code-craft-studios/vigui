export class RequiredEnvError extends Error{
  constructor(envName: string){
    super(`${envName} env is required check your env file`)
  }
}

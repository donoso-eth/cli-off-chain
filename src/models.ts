export interface options {

}

export enum Action {
    CREATE_EMPTY_RESOLVER_ACTION = "Create am empty off-chain resolver",
    CREATE_HTTP_RESOLVER_ACTION  = "Create am http off-chain resolver",
    QUIT_ACTION = "Quit",
  }

  export type SampleResolverTypeCreationAction =
  | Action.CREATE_EMPTY_RESOLVER_ACTION
  | Action.CREATE_HTTP_RESOLVER_ACTION;



export interface Dependencies {
    [name: string]: string;
  }
declare namespace NodeJS {
  interface ProcessEnv {
    databaseHost: string
    databasePort: number
    databaseUser: string
    databasePassword: string
    
    port: number
  }
}
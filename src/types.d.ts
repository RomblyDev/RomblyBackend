declare namespace NodeJS {
  interface ProcessEnv {
    databaseHost: string
    databasePort: number
    databaseUser: string
    databasePassword: string
    databaseName: string

    port: number
  }
}

// TODO: Figure out what kind of things pep needs from us.
enum WSMessageType {
  // What types of messages are there?
  SetPlayerBP
}
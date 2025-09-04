export interface DatabaseConfig {
  host: string;
  port: number;
  userName: string;
  password: string;
  dbName: string;
  isActiveLogger: boolean;
  ssl: boolean;
}

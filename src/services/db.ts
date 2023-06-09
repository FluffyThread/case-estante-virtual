import sqlite3 from 'sqlite3';

class Database {
  private static instance: sqlite3.Database;

  private constructor() {}

  public static getInstance(): sqlite3.Database {
    if (!Database.instance) {
      // cria a conexão com o banco de dados em memória
      Database.instance = new sqlite3.Database(':memory:');
    }
    return Database.instance;
  }
}

// obtém a instância da conexão com o banco de dados
export const db = Database.getInstance();
import pg, { Pool, PoolConfig, QueryResult } from 'pg'

import ServerModel from './models/Server'
import UserModel from './models/User'

export default class DatabaseConnector {
  pool: Pool

  constructor(config: PoolConfig) {
    this.pool = new Pool(config)
  }

  dbQuery = (
    query: string,
    params: (string | number)[]
  ): Promise<QueryResult> => this.pool.query(query, params)

  Server = new ServerModel(this.dbQuery)
  User = new UserModel(this.dbQuery)
}

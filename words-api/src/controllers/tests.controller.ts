import { Response, Request } from 'express';
import _ from 'lodash'
import { Pool } from 'pg'

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const getTests = async (req: Request, res: Response) => {
  const result = await pool.query('SELECT * from test')

  const tests = result.rows.map(r => ({
    testId: r["test_id"],
    testName: r["test_name"],
    complexity: r["complexity"],
    topic: r["topic"],
    authorId: 0, // not used yet
    authorName: r["author_name"],
    words: r["words"]
  }))
  
  res.json(tests)
}

export default {
  getTests,
}

import { Response, Request } from 'express';
import _ from 'lodash'

const authenticate = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  if (['user', 'test'].includes(username)) {
    return res.json({token: "JWT_TOKEN"});
  }

  return res.status(401).end();
}

export default {
  authenticate
}

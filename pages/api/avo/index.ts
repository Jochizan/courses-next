import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();

  res.statusCode = 200; // ok
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(allEntries));
};

export default allAvos;

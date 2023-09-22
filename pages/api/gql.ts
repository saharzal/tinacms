import { databaseRequest } from "@/lib/dbConnection";
import database from "@/tina/database";

export default async function handler(req: any, res: any) {
  // Add your own Auth here.
  // For example
  // If(!await isAuthorized(token: req.headers.authorization)){
  //   return a 401
  //  }
  const { query, variables } = req.body;
  const result = await databaseRequest({ query, variables });
  return res.json(result);
}

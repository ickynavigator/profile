import faunadb from "faunadb";
import dotenv from "dotenv";

dotenv.config();

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);

  return client
    .query(q.Create(q.Ref("classes/Forms"), { data }))
    .then((res) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      });
    })
    .catch((err) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(err),
      });
    });
};

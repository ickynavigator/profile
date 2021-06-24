import faunadb from "faunadb";
import dotenv from "dotenv";
import "encoding";

dotenv.config();

function getId(urlPath) {
  return urlPath.match(/([^\/]*)\/*$/)[0];
}

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  const id = getId(event.path);
  try {
    const res = await client.query(q.Get(q.Ref(`classes/Forms/${id}`)));
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};

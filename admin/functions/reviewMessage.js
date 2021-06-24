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
  const data = JSON.parse(event.body);
  const id = getId(event.path);
  try {
    const res = await client.query(
      q.Update(q.Ref(`classes/Forms/${id}`), { data })
    );
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

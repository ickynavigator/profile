import faunadb from "faunadb";
import dotenv from "dotenv";
import "encoding";

dotenv.config();

/**
 * @param {string} urlPath
 */
function getId(urlPath) {
  return urlPath.match(/([^\/]*)\/*$/)[0];
}

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context, callback) => {
  const id = getId(event.path);
  try {
    const res = await client.query(q.Get(q.Ref(`classes/Forms/${id}`)));
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(res),
    });
  } catch (err) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(err),
    });
  }
};

import faunadb from "faunadb";

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

exports.handler = (event, context, callback) => {
  const id = getId(event.path);
  return client
    .query(q.Get(q.Ref(`classes/Forms/${id}`)))
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

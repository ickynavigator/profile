import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_Forms"))))
    .then((res) => {
      const { data } = res;

      const allFormsData = data.map((val) => {
        return q.Get(val);
      });

      return client.query(allFormsData).then((res) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(res),
        });
      });
    })
    .catch((err) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(err),
      });
    });
};

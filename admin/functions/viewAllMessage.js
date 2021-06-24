import faunadb from "faunadb";
import dotenv from "dotenv";
import "encoding";

dotenv.config();

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  try {
    const indexes = await client.query(
      q.Paginate(q.Match(q.Ref("indexes/all_Forms")))
    );
    // @ts-ignore
    const { data } = indexes;
    const allFormsData = data.map((val) => {
      return q.Get(val);
    });
    const res = await client.query(allFormsData);

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

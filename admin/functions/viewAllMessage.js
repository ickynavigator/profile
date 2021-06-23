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
    // @ts-ignore
    const res = await client.query(
      q.Paginate(q.Match(q.Ref("indexes/all_Forms")))
    );

    // @ts-ignore
    const { data } = res;

    const allFormsData = data.map((val) => {
      return q.Get(val);
    });

    const res_2 = await client.query(allFormsData);

    return {
      statusCode: 200,
      body: JSON.stringify(res_2),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};

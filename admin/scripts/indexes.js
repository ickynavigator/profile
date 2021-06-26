import faunadb, {
  Abort,
  Collection,
  Concat,
  CreateIndex,
  FindStrRegex,
  If,
  IsString,
  Lambda,
  LowerCase,
  Not,
  Query,
  Select,
  Var,
} from "faunadb";
import dotenv from "dotenv";
import "encoding";

dotenv.config();

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

function StringSplit(string, delimiter = " ") {
  return If(
    Not(IsString(string)),
    Abort("SplitString only accept strings"),
    q.Map(
      FindStrRegex(string, Concat(["[^\\", delimiter, "]+"])),
      Lambda("res", LowerCase(Select(["data"], Var("res"))))
    )
  );
}

CreateIndex({
  name: "Forms_by_words",
  source: [
    {
      collection: Collection("Forms"),
      fields: {
        words: Query(Lambda("Forms", StringSplit(Select(["data", "name"])))),
      },
    },
  ],
  terms: [
    {
      binding: "words",
    },
  ],
});

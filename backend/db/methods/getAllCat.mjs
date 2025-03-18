export default function getAllCat(connection, onsuccess) {
  let query =
    "select json_object('cat',category,'img',max(img)) from product group by category";
  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchAll());
    });
}

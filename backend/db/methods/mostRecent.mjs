export default function mostRecent(connection, onsuccess) {
  let query = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product order by pid DESC limit 10;`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchAll());
    });
}

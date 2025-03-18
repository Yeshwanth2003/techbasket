export default function hotProducts(connection, onsuccess) {
  // based on likes
  let query = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product order by likes DESC limit 10;`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchAll());
    });
}

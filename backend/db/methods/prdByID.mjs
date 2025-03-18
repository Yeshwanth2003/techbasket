export default function prdByID(connection, onsuccess, id) {
  let query = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product where pid = ${id}`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchAll());
    });
}

export default function search(connection, onsuccess, key, limStart = 1) {
  let mainQuery = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product where name like "%${key}%" or category like "%${key}%" limit ${
    limStart - 1
  },10`;
  connection
    .sql(mainQuery)
    .execute()
    .then((recomD) => {
      onsuccess(recomD.fetchAll());
    });
}

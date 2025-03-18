export default function prdByName(connection, onsuccess, key) {
    let mainQuery = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product where name ='${key}' limit 1`;
    connection
      .sql(mainQuery)
      .execute()
      .then((recomD) => {
        onsuccess(recomD.fetchAll());
      });
  }
  
export default function getSellerProduct(
  connection,
  onsuccess,
  username,
  password,
  page
) {
  let query = `select uid from user where username = '${username}' and password = '${password}'`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      let uid = res.fetchOne()[0];
      if (uid) {
        query = `select sellerid from seller where uid=${uid}`;
        connection
          .sql(query)
          .execute()
          .then((res1) => {
            let sid = res1.fetchOne()[0];
            if (sid) {
              query = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product where sid = ${sid} limit ${
                (page - 1) * 10
              },10`;
              connection
                .sql(query)
                .execute()
                .then((data) => {
                  onsuccess(false, data.fetchAll());
                });
            } else onsuccess(true);
          });
      } else {
        onsuccess(true);
      }
    });
}


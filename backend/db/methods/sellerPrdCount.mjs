export default function sellerPrdCount(
  connection,
  onsuccess,
  username,
  password
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
              query = `select count(*) from product where sid = ${sid}`;
              connection
                .sql(query)
                .execute()
                .then((res2) => {
                  let count = res2.fetchOne()[0];
                  onsuccess(false, count);
                });
            } else onsuccess(true);
          });
      } else {
        onsuccess(true);
      }
    });
}

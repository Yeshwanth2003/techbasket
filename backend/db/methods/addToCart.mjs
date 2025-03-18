export default function addToCart(
  connection,
  onsuccess,
  username,
  password,
  pid
) {
  let query1 = `select uid from user where username='${username}' and password='${password}';`;
  connection
    .sql(query1)
    .execute()
    .then((res) => {
      let uid = res.fetchOne();
      if (uid) {
        let query2 = `insert into cart(pid,uid) values(${pid},${uid[0]})`;
        connection
          .sql(query2)
          .execute()
          .then((res) => {
            onsuccess();
          });
      } else onsuccess(false);
    });
}

export default function deleteFromCart(
  connection,
  onsuccess,
  username,
  password,
  pid,
  type
) {
  let query1 = `select uid from user where username='${username}' and password='${password}';`;

  connection
    .sql(query1)
    .execute()
    .then((res) => {
      let uid = res.fetchOne()[0];
      let query2;
      if (type == 0) {
        // to delete only one element
        query2 = `delete FROM tech_basket.cart where uid =${uid} and pid = ${pid} limit 1;`;
      } else {
        // to delete all element
        query2 = `delete FROM tech_basket.cart where uid =${uid} and pid = ${pid};`;
      }
      connection
        .sql(query2)
        .execute()
        .then(
          () => {
            onsuccess();
          },
          () => {
            onsuccess(true);
          }
        );
    });
}

export default function checkifseller(
  connection,
  onsuccess,
  username,
  password
) {
  let query = `select (select count(*) from seller where uid = (select uid from user where username = '${username}' and password = '${password}')) > 0 as data`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      let val = res.fetchOne()[0];
      onsuccess(val);
    });
}

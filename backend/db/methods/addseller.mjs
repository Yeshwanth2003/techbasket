export default function addseller(
  connection,
  onsuccess,
  username,
  password,
  country
) {
  let query = `select uid from user where username = '${username}' and password ='${password}'`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      let val = res.fetchOne()[0];
      if (val) {
        query = `insert into seller(country,uid) values('${country}',${val})`;
        connection
          .sql(query)
          .execute()
          .then(() => {
            onsuccess(true);
          });
      } else onsuccess();
    });
}

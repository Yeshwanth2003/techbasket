export default function checkExistence(connection, userdata, onsuccess) {
  connection
    .sql(
      `select count(*)>0 as exist from user where username="${userdata.username}" and password="${userdata.password}";`
    )
    .execute()
    .then((res) => {
      if (res.fetchOne()[0]) {
        onsuccess(1);
      } else onsuccess(0);
    });
}

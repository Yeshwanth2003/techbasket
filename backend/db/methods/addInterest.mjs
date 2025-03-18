export default function addInterest(
  connection,
  onsucess,
  username,
  password,
  key
) {
  let query1 = `select uid from user where username='${username}' and password='${password}';`;

  connection
    .sql(query1)
    .execute()
    .then((res) => {
      let uid = res.fetchOne()[0];
      let query2 = `select (select count(*) from recom where uid = '${uid}')>0 as exist`;
      connection
        .sql(query2)
        .execute()
        .then((res) => {
          let val = res.fetchOne()[0];
          let query3;
          if (val) {
            query3 = `update recom set recomdata = '${key}' where uid = ${uid};`;
          } else {
            query3 = `insert into recom(recomdata,uid)values('${key}',${uid})`;
          }
          connection
            .sql(query3)
            .execute()
            .then(() => {
              onsucess();
            });
        });
    });
}

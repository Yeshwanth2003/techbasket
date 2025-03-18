export default function userIntrestItem(
  connection,
  username,
  password,
  onsuccess
) {
  let recomDataQuery = `select recomdata from recom where uid = (select uid from user where username='${username}' and password='${password}')`;
  connection
    .sql(recomDataQuery)
    .execute()
    .then((res) => {
      let rData = res.fetchOne();
      if (rData) {
        let mainQuery = `select json_object("pid",pid,"name",name,"img",img,"likes",likes,"dislike",dislike,"category",category,"price",price) from product where name like "%${rData}%" or category like "%${rData}%" limit 10`;
        connection
          .sql(mainQuery)
          .execute()
          .then((recomD) => {
            onsuccess(recomD.fetchAll());
          });
      }
      // if uid not in recom
      else onsuccess([], true);
    });
}

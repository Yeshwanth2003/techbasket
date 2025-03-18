export default function addPrd(
  connection,
  onsuccess,
  username,
  password,
  data
) {
  let query = `select sellerid from seller where uid =(select uid from user where username = '${username}' and password = '${password}')`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      let sid = res.fetchOne()[0];
      if (sid) {
        query = `insert into product(category,img,name,price,sid,dislike,likes) values('${data.category}','${data.img}','${data.name}',${data.price},${sid},0,0)`;
        connection
          .sql(query)
          .execute()
          .then(
            () => onsuccess(true),
            (err) => {
              onsuccess();
              console.error("error", err);
            }
          );
      } else onsuccess();
    });
}

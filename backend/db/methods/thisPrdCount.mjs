export default function thisPrdCount(connection, onsuccess, prd) {
  let query = `select count(*) from product  where name like "%${prd}%" or category like "%${prd}%"`;
  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchOne());
    });
}

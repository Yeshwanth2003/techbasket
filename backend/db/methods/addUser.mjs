export default function addUser(connection, onsuccess, userdata) {
  let query = `insert into user(username,password,email) values('${userdata.username}','${userdata.password}','${userdata.email}');`;
  connection
    .sql(query)
    .execute()
    .then(
      () => onsuccess(),
      () => onsuccess(true)
    );
}

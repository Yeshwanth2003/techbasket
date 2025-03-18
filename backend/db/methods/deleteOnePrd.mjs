export default function deleteOnePrd(connection, onsuccess, pid) {
  // need to perform validation but haven't
  let query = `delete from product where pid = ${pid};`;
  connection
    .sql(query)
    .execute()
    .then(
      () => onsuccess(true),
      () => onsuccess()
    );
}

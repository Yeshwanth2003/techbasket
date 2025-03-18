export default function userCart(connection, username, password, onsuccess) {
  let query = `select  json_object('pid',p.pid,'name',name,'price',price,'img',img,'category',category,'count',count(c.pid)) from product p inner join cart c where c.pid = p.pid and 
c.uid =  (select u.uid from user u where u.username = '${username}' and u.password = '${password}') 
group by c.pid; `;

  connection
    .sql(query)
    .execute()
    .then((res) => {
      onsuccess(res.fetchAll());
    });
}

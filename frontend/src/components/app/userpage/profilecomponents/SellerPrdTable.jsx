import exportFetch from "../../../utilityFiles/exportFetch";
import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import { deleteOnePrdRoute } from "../../../utilityFiles/urlMap";
import "./styles/sellerPrdTable.css";

export default function SellerPrdTable({ sellerProducts, prdsFetcher }) {
  return (
    <>
      <tbody>
        {sellerProducts.map((elem) => {
          return (
            <SellerPrdTableRow
              id={elem.pid}
              category={elem.category}
              dislikes={elem.dislike}
              likes={elem.likes}
              name={elem.name}
              price={elem.price}
              key={"prdrow" + elem.pid}
              prdsFetcher={prdsFetcher}
            />
          );
        })}
      </tbody>
    </>
  );
}
function SellerPrdTableRow({
  id,
  name,
  price,
  likes,
  dislikes,
  category,
  prdsFetcher,
}) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{likes}</td>
        <td>{dislikes}</td>
        <td>{category}</td>
        <td>
          <Actions id={id} prdsFetcher={prdsFetcher} />
        </td>
      </tr>
    </>
  );
}

function Actions({ id, prdsFetcher }) {
  function onDelete(id) {
    exportFetch(deleteOnePrdRoute, { pid: id }, "DELETE").then((resData) => {
      if (!resData) {
        console.log("error on seller action");
        return;
      }
      prdsFetcher();
    });
  }

  return (
    <>
      <div id="pSellerSCB" className="p-seller-scb">
        <MyLink to={`/prd-view?prd=${id}`}>
          <button className="p-seller-cb-btn">
            <span
              style={{ "--iconsize": "25px", "--customColor": "royalblue" }}
              className="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
            >
              visibility
            </span>
          </button>
        </MyLink>
        <button className="p-seller-cb-btn" onClick={onDelete.bind(this, id)}>
          <span
            style={{ "--iconsize": "25px", "--customColor": "red" }}
            className="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
          >
            delete
          </span>
        </button>
      </div>
    </>
  );
}

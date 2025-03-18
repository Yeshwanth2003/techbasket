export default function SellerPaginGen({ tot, prdsFetcher }) {
  const loopCount = Math.ceil(tot/ 10);
  return (
    <>
      {Array(loopCount?loopCount:0)
        .fill(null)
        .map((elem, index) => {
          return (
            <SPaginBttn
              number={index + 1}
              prdsFetcher={prdsFetcher}
              key={`sellerpaginbtn${index}`}
            />
          );
        })}
    </>
  );
}

function SPaginBttn({ number, prdsFetcher }) {
  return (
    <button
      className="seller-pagin-btn"
      onClick={prdsFetcher.bind(this, number)}
    >
      {number}
    </button>
  );
}

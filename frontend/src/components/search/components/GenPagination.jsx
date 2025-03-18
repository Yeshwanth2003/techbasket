import PaginationButton from "./PaginationButton";

export default function GenPagination({
  noOfRes,
  setSearchRes,
  setLoading,
  searchData,
}) {
  const loopCount = Math.ceil(noOfRes / 10);
  return (
    <>
      {Array(loopCount)
        .fill(null)
        .map((elem, index) => {
          return (
            <PaginationButton
              number={index + 1}
              setSearchRes={setSearchRes}
              setLoading={setLoading}
              searchData={searchData}
            />
          );
        })}
    </>
  );
}

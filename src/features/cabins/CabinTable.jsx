import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import useURL from "../../hooks/useURL";
import Empty from "../../ui/Empty";
function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const { getParam } = useURL();

  if (isLoading) return <Spinner />;

  if (!cabins?.length) return <Empty resourceName="cabins" />;

  // 1- filter
  const filterValue = getParam("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  } else if (filterValue === "with-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  } else if (filterValue === "no-discount") {
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  }

  // 2- sort
  const sortBy = getParam("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => {
    if (typeof a[field] === "string")
      return a[field].localeCompare(b[field]) * modifier;
    return (a[field] - b[field]) * modifier;
  });

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;">
        <Table.Header>
          <Table.Row>
            <th></th>
            <th>Cabin</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Discount</th>
            <th></th>
          </Table.Row>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
        {/* <Table.Body>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table.Body> */}
      </Table>
    </Menus>
  );
}

export default CabinTable;

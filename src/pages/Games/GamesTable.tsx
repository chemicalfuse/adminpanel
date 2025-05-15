import Table from "component/table/Table";
import { columns, filters } from "./constants";
import Button from "component/buttons/Button";
import { buttonTypes } from "component/buttons/constants/buttonTypes";

const GamesTable = (): React.ReactElement => {
  const additionalButtons = (
    <Button
      buttonType={buttonTypes.warning}
      onClick={() => {}}
      variant="contained"
    >
      Add game
    </Button>
  );
  return (
    <Table
      columns={columns}
      rows={[]}
      pageData={{
        page: 1,
        limit: 10,
        totalCount: 0,
      }}
      showSearch={true}
      showSearchDrawer={true}
      filters={filters}
      additionalButtons={additionalButtons}
      fetchData={() => {}}
    />
  );
};
export default GamesTable;

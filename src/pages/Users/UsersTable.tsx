import React from "react";

import LoadingComponent from "component/loading/LoadingComponent";
import Table from "component/table/Table";
import { columns, filters } from "pages/Users/constants";

const UsersTable = (): React.ReactElement => {
  return (
    <>
      <Table
        columns={columns}
        rows={[]}
        pageData={{
          page: 1,
          limit: 10,
          totalCount: 0,
        }}
        filters={filters}
        showSearch={true}
        showSearchDrawer={true}
        fetchData={() => {}}
      />
    </>
  );
};

export default UsersTable;

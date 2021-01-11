import { makeStyles, Paper, Table, TableContainer } from "@material-ui/core";
import React from "react";
import TableBodyCustom from "./TableBodyCustom";
import TableHeadCustom from "./TableHeadCustom";
const useStyle = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 440,
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

export default function TableCustom() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("jobname");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    console.log(order, "and", orderBy);
  };
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBodyCustom order={order} orderBy={orderBy} />
        </Table>
      </TableContainer>
    </Paper>
  );
}
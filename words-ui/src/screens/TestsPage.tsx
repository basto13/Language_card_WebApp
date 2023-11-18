import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TopNav } from "../components/TopNav";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../store/store';
import { WordsApiService } from '../services/api';

export const TestsPage = () => {
  const {state, dispatch } = useContext(StoreContext);

  React.useEffect(() => {
    WordsApiService.getTests().then(tests => {
      dispatch({type: 'setTests', params: { tests }})
    })
  }, []);

  return (<>
    <TopNav />
    <TestsTable />
    </>
  )
};

export function TestsTable() {
  const {state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const rows = state.tests;

  const startTest = (testId: number) => {
    navigate(`/test/${testId}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Test name</TableCell>
            <TableCell align="right">Complexity</TableCell>
            <TableCell align="right">Topic</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="center">Start test</TableCell>
            <TableCell align="center">Edit test</TableCell>
            <TableCell align="center">Delete test</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.testName}</TableCell>
              <TableCell align="right">{row.complexity}</TableCell>
              <TableCell align="right">{row.topic}</TableCell>
              <TableCell align="right">{row.authorName}</TableCell>

              <TableCell align="center"><span style={{cursor: 'pointer'}} className="material-icons" onClick={() => startTest(row.testId)}>play_arrow</span></TableCell>
              <TableCell align="center"><span style={{color: 'grey'}} className="material-icons">edit</span></TableCell>
              <TableCell align="center"><span style={{cursor: 'pointer'}} className="material-icons" onClick={() => dispatch({ type: 'deleteTest', params: { id: row.testId }})}>delete</span></TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
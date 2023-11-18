import * as React from 'react';
import Paper from '@mui/material/Paper';

import { TopNav } from "../components/TopNav";
import { Button, Container, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StoreContext } from '../store/store';

export const CurrentTest = () => {
  const { testId } = useParams();
  const { state, dispatch} = useContext(StoreContext);

  React.useEffect(() => {
    dispatch({ type: 'setTest', params: {testId: parseInt(testId || '')}});
  }, []);

  return (<>
    <TopNav />
    <CurrentTestView testId={parseInt(testId || '')}/>
    </>
  )
};

export function CurrentTestView({ testId }: { testId: number }) {
  const {state, dispatch} = useContext(StoreContext);
  const [isEnHidden, setEnHidden] = useState(true);
  const navigate = useNavigate();

  const test = state.currentTest;
  if (!test) {
    return <div>"Loading"</div>;
  }

  const goNext = (isCorrect: boolean) => {
    dispatch({type: 'nextQuestion', params: { isCorrect }});
    if (test.words.length - 1 === test.currentWord) {
      navigate("/results");
    } else {
      setEnHidden(true);
    }
  }

  return (
    <Container maxWidth="sm" style={{marginTop: 20}}>
      <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
          <Paper style={{padding: 100, marginBottom: 20, width: 100, textAlign: 'center'}}>
            <div>
              { test.words[test.currentWord].russian } 
            </div>
          </Paper>
          <Paper style={{width: 100, padding: 100, marginBottom: 20, cursor: 'pointer', textAlign: 'center'}} onClick={() => setEnHidden(false)}>
            <div>
              { isEnHidden ? "?" : test.words[test.currentWord].english }
            </div>
          </Paper>
        </Grid>
        {isEnHidden
          ? (<></>)
          : (<>
            <Button color='success' style={{marginRight: 10}} onClick={() => goNext(true)}>Correct</Button>
            <Button color='error' onClick={() => goNext(false)}>Wrong</Button>
            </>)}
      </Grid>
    </Container>
  );
}
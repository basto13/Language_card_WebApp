import * as React from 'react';

import { TopNav } from "../components/TopNav";
import { Box, Button, Container, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../store/store';

export const TestResults = () => {
  return (<>
    <TopNav />
    <TestResultsView />
  </>
  )
};

export function TestResultsView() {
  const { state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const test = state.tests.find(t => t.testId === state.currentTest?.testId);

  if (!test) {
    navigate("/tests");
    return <></>;
  }

  const currentTestScore = state.currentTest?.correct;
  const currentTotal = state.currentTest?.words.length;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <h1>
        You have guessed {currentTestScore}/{currentTotal} in {test.testName} ({test.complexity})!
      </h1>
    </Box>
  );
}
import { useReducer } from "react";
import { TestWord, testsList } from "./sample-data";
import React from "react";

export type AppState = {
  tests: Test[],
  currentTest: CurrentTest | null
}

export type Test = {
  testId: number;
  testName: string;
  complexity: string;
  topic: string;
  authorId: number;
  authorName: string;
  words: TestWord[];
}

export type CurrentTest = {
  testId: number;
  currentWord: number;
  words: TestWord[];
  correct: number,
}


const initialState: AppState = {
  tests: testsList,
  currentTest: null
};

type Action = { type: string; params: any }

function reducer(
  state: AppState,
  action: Action
): AppState {
  switch (action.type) {
    case 'setTests': {
      return {
        ...state,
        tests: action.params.tests
      }
    }

    case 'deleteTest':
      return {
        ...state,
        tests: state.tests.filter(t => t.testId !== action.params.id)
      };

    case 'update': {
      return state;
    }

    case 'create': {
      return state;
    }

    case 'setTest': {
      const testId = action.params.testId;
      const test = state.tests.find(t => t.testId !== action.params.id);

      return {
        ...state,
        currentTest: {
          testId,
          words: test!.words,
          correct: 0,
          currentWord: 0,
        }
      }
    }

    case 'nextQuestion': {
      const isCorrect = action.params.isCorrect;

      return {
        ...state,
        currentTest: {
          testId: state.currentTest!.testId,
          words: state.currentTest!.words,
          correct: state.currentTest!.correct + (isCorrect ? 1 : 0),
          currentWord: state.currentTest!.currentWord + 1,
        }
      };
    }
  }

  throw Error('Unknown action.');
}

export function useAppReducer() {
  return useReducer(reducer, initialState);
}

export const StoreContext = React.createContext({ state: initialState, dispatch: (v: Action) => {} });

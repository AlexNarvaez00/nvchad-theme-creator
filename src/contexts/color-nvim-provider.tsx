import { NvEditorTypes } from "@/types/nvEditorTypes";
import { createContext, useState } from "react";

interface State
  extends NvEditorTypes{
background:string
  }

interface Props {
  children: React.ReactNode;
}

interface StateProvider {
  state: State;
  setState: (state: State) => void;
}

const initialState: State = {
  background: `#1e1e2e`,
  foregroundComments: `#000000`,
  foregroundFunctions: `#000000`,
  foregroundKeywords: `#000000`,
  foregroundOperators: `#000000`,
  foregroundString: `#000000`,
  foregroundVariables: `#000000`,
};

export const ColorsNvimContext = createContext<StateProvider>({
  state: initialState,
  setState: (state) => null,
});

export const ColorsNvimProvider = ({ children }: Props) => {
  const [colors, setColors] = useState<State>(initialState);

  const stateProvider: StateProvider = {
    state: colors,
    setState: (state: State) => {
      setColors(state);
    },
  };

  return (
    <ColorsNvimContext.Provider value={stateProvider}>
      {children}
    </ColorsNvimContext.Provider>
  );
};

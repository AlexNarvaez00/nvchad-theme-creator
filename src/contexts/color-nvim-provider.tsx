import { NvEditorTypes } from "@/types/nvEditorTypes";
import { NvStatusBarTypes } from "@/types/nvStatusBarTypes";
import { NvTabsTypes } from "@/types/nvTabs";
import { NvTreeTypes } from "@/types/nvTreeTypes";
import { createContext, useState } from "react";

interface State
  extends NvEditorTypes,
    NvTabsTypes,
    NvStatusBarTypes,
    NvTreeTypes {}

interface Props {
  children: React.ReactNode;
}

interface StateProvider {
  state: State;
  setState: (state: State) => void;
}

const initialState: State = {
  background: `#000000`,
  backgroundActive: `#000000`,
  backgroundBranch: `#000000`,
  backgroundFileName: `#000000`,
  backgroundFolderIcon: `#000000`,
  backgroundInactive: `#000000`,
  backgroundMode: `#000000`,
  backgroundTabs: `#000000`,
  backgroundTree: `#000000`,
  foregroundComments: `#000000`,
  foregroundFiles: `#000000`,
  foregroundFolders: `#000000`,
  foregroundFunctions: `#000000`,
  foregroundKeywords: `#000000`,
  foregroundOperators: `#000000`,
  foregroundVariables: `#000000`,
  foregroundString: `#000000`, 
  forendgroundLSP: `#000000`,
  forendgroundPerDocument: `#000000`,
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

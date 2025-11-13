import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { HistoryItem } from "./use-core-store.types.ts";

const NAME = "core:store";

interface CoreStore {
  rates: number;
  tempRates: string;
  setRates: (rates: number) => void;
  setTempRates: (rates: string) => void;
  resetRates: (rates: number) => void;
  history: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
  restToHistory: () => void;
}

export const useCoreStore = create<CoreStore>()(
  devtools(
    persist(
      set => ({
        rates: 0,
        tempRates: "",
        history: [],
        setTempRates: (rates: string) => {
          return set({ tempRates: rates });
        },
        setRates: (rates: number) => {
          return set({ rates: rates });
        },
        resetRates: () => {
          return set({ rates: undefined });
        },
        addToHistory: (item: HistoryItem) => {
          return set(prevState => ({ history: [...prevState.history, item] }));
        },
        restToHistory: () => {
          return set({ history: [] });
        }
      }),
      {
        name: NAME,
        storage: createJSONStorage(() => sessionStorage),
        partialize: state => ({ history: state.history })
      }
    )
  )
);

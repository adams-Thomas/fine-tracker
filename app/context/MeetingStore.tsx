'use client'

import { FinesMeeting } from "@prisma/client";
import { createContext, useCallback, useContext, useRef, useState, useSyncExternalStore } from "react";

type Store = {
  list: FinesMeeting[],
  selected: FinesMeeting | undefined,
  refresh: boolean
}

const initialState: Store = {
  list: [],
  selected: undefined,
  refresh: false
}

function useStoreData(): {
  get: () => Store,
  set: (value: Partial<Store>) => void,
  subscribe: (callback: () => void) => () => void
} {
  const store = useRef<Store>(initialState);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<Store>) => {
    store.current = {
      ...store.current,
      ...value
    };
    subscribers.current.forEach((callback) => callback())
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback)
  }, [])

  return {
    get,
    set,
    subscribe
  }
}

type MeetingStoreDataReturnType = ReturnType<typeof useStoreData>;

const StoreContext = createContext<MeetingStoreDataReturnType | undefined>(undefined);

export function StoreProvider({children}: {children: React.ReactNode}) {
  return <StoreContext.Provider value={useStoreData()}>
    {children}
  </StoreContext.Provider>
}

export function useStore<SelectorOutput>(
  selector: (store: Store) => SelectorOutput
): [SelectorOutput, (value: Partial<Store>) => void] {
  const store = useContext(StoreContext);
  if (!store) 
    throw new Error('Store not found');

  const state = useSyncExternalStore(store.subscribe, () => selector(store.get()), () => selector(initialState));

  return [state, store.set];
}

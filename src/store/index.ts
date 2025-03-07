import { configureStore, Middleware } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import pokemonsReducer from './pokemon/pokemons'
import { localStorageMiddleware } from './middlewares/localStorage-middleware'
// import { localStorageMiddleware } from './middlewares/localStorage-middleware'

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(localStorageMiddleware as Middleware)
    
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// eslint-disable-next-line import/no-cycle
import { AuthState } from './modules/auth/state'
import { AppState } from './modules/app/state'
import { UserState } from './modules/user/state'

export type RootState = {
  auth: AuthState,
  app: AppState,
  user: UserState
}
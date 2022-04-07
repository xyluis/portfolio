import { createContext } from 'react'

import Layout from './Layout'

export const Context = createContext({})

export default function Ui({ children }: PropsWithChildren): JSX.Element {
  return (
    <Context.Provider value={{}}>
      <div id="mount">
        <Layout>{children}</Layout>
      </div>
    </Context.Provider>
  )
}
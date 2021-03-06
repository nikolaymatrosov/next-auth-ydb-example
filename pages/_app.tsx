import { Provider } from 'next-auth/client'
import React from 'react'
import '../styles.css'

const App = ({ Component, pageProps }) => {
  const { session } = pageProps
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App

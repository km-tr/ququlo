import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '../styles.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App

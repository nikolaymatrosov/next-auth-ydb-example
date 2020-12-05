import Nav from '../components/nav'
import Footer from '../components/footer'
import React from 'react'

const NextAuth = () => (
  <>
    <Nav />
    <main>
      <h1>NextAuth.js Demo</h1>
      <p>
        This is an example project that uses{' '}
        <a href={`https://www.npmjs.com/package/next-auth`}>next-auth</a>.
      </p>
      <p>
        See <a href="https://next-auth.js.org">next-auth.js.org</a> for more
        information and documentation. A more full fledged example can be found
        at{' '}
        <a href="https://next-auth-example.now.sh">next-auth-example.now.sh</a>
      </p>
      <p>
        This demo uses YDB as backend.
      </p>
    </main>
    <Footer />
  </>
)

export default NextAuth

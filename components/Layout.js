import React from 'react'
import Head from 'next/head'
import { Menu, Loader, Footer } from './'


export default ({ title, content:Content }) => (
  <main role="application">
    <Head>
      <title>Carlos Sz | {title}</title>
    </Head>

    <Menu />
    <Loader />

    <div id="content">
      <Content />
    </div>

    <Footer />

    <style jsx global>{`
      * { box-sizing: border-box; }
      html { height: 100%; }
      body, main[role=application] {
        background-color: #000;
        color: #FFF;
        min-height: 100vh;
        display: flex;
        margin: 0;
        padding: 0;
        flex-direction: column;
        overflow-x: hidden;
      }
      #content {
        flex: 1;
        padding-top: 70px;
        display: flex;
        justify-content: center;
        -ms-align-items: center;align-items: center;
      }
    `}</style>
  </main>
)



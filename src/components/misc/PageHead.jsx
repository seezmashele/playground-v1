import Head from 'next/head'

const PageHead = ({ title = '' }) => (
    <Head>
      <title>
        {title
          ? `${title} - Playground`
          : 'Gaming Communities, Events & Discussions - Playground.africa'}
      </title>
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
        key="viewport"
      />
      <link rel="icon" href="/favicon.png" key="favicon" />
    </Head>
  )

export default PageHead

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CarSite</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </Head>
      <main>
        <header>
          <div className="header">
            <h1 id="companyName">ReWorked</h1>
            <img id="logo" src="https://pasteboard.co/a2YeR7RwSE6R.png" />
          </div>
        </header>
      </main>
    </div>
  );
}

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>G&D Wedding Weekend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* update favicon */}
      <main>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{ loop: Infinity, duration: 8 }}
        >
          <img src="/danielle.png" alt="danielle" className="virginia" />
        </motion.div>
        <h1 className="title">Save the date.</h1>
        <h2>June 5, 2020</h2>
        <img src="/virginia_outline.png" alt="virginia" className="heads" />

        <motion.div
          animate={{
            scale: [2, 1, 1, 2, 2],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{ loop: Infinity, duration: 8 }}
        >
          <img src="/gavin.png" alt="gavin" className="heads" />
        </motion.div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .heads {
          height: 8em;
        }
        .virginia {
          height: 5em;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

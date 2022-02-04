import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debugging</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the world of Debugging!</h1>

        <p className={styles.description}>
          Topical articles and videos on the subject
        </p>

        {/* <Grid
          h="400px"
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={5} rowStart={2} colSpan={1} bg="#61b0b7" />
          <GridItem colSpan={8} bg="#1655" />

          <GridItem colSpan={7} rowStart={2} rowSpan={5} bg="#219ebc" />
        </Grid> */}

        <div className={styles.grid}>
          <a
            href="https://javascript.info/debugging-chrome"
            className={styles.card}
          >
            <h2>Debugging in Chrome &rarr;</h2>
            <p>Using the debugger tool in the browser</p>
          </a>

          <a
            href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging"
            className={styles.card}
          >
            <h2>NodeJS Debugging &rarr;</h2>
            <p>Learn about Debugging in NodeJS!</p>
          </a>

          <a
            href="https://developer.chrome.com/docs/devtools/javascript/"
            className={styles.card}
          >
            <h2>Devtools and Debugging &rarr;</h2>
            <p>Devtools</p>
          </a>

          <a
            href="https://developer.chrome.com/docs/devtools/javascript/reference/"
            className={styles.card}
          >
            <h2>JavaScript Reference &rarr;</h2>
            <p>DevTools Reference</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=2oFKNL7vYV8"
            className={styles.card}
          >
            <h2>Youtube &rarr;</h2>
            <p>Getting started with Node.js debugging in VS Code </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=H0XScE08hy8"
            className={styles.card}
          >
            <h2>Youtube &rarr;</h2>
            <p>Debugging JavaScript - Chrome DevTools 101</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=tC91t9OvVHA"
            className={styles.card}
          >
            <h2>Youtube &rarr;</h2>
            <p>
              The New Way To Debug JavaScript in VS Code - No Extension Required{' '}
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=PJeNReqyH88"
            className={styles.card}
          >
            <h2>Youtube &rarr;</h2>
            <p>How to debug React app in VSCode</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}

import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
`;

export default function Home() {
  return (
    <div>
      <Title>
          Emily Mame Ford
      </Title>
      <Link href="/videos/first-video">
         <a>this page!</a>
      </Link>
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
  )
}

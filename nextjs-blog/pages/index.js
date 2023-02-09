import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

import Link from 'next/link';
import Date from '../components/date';
// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[自己紹介]</p>
//         <p>
//           (これは 「クーちゃん サイト」 - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   );
// }

export default function Home({ allPostsData }) {
    return (
      <Layout home>
        {/* Keep the existing code here */}
  
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>



          <p>[自己紹介]</p>
        <p>
          (これは 「クーちゃん サイト」 - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>




          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                // li  置き換え7行
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }



// 追加しました 2023/02/07
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }
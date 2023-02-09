

//import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}      //fallback: false,と書いてある所で書き込んだ

import { getAllPostIds, getPostData } from '../../lib/posts';

// export async function getStaticProps({ params }) { // 追加_1の為コメントアウト
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }  //下と置き換えの為コメントアウトしました


import Layout from '../../components/layout';
//import { getAllPostIds } from '../../lib/posts';
//import { getAllPostIds, getPostData } from '../../lib/posts';
// export default function Post({ postData }) {  //追加_2の為コメントアウト
//     return (
//       <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//       </Layout>
//     );
//   }

  export async function getStaticProps({ params }) {    // 追加_1
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

//   export default function Post({ postData }) { //追加_2 //追加_3の為コメントアウト
//     return (
//       <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//         <br />
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </Layout>
//     );
//   }

  // Add this import
import Head from 'next/head';  //追加_3 //追加_4のためコメントアウト
// export default function Post({ postData }) {
//   return (
//     <Layout>
//       {/* Add this <Head> tag */}
//       <Head>
//         <title>{postData.title}</title>
//       </Head>

//       {/* Keep the existing code here */}
//     </Layout>
//   );
// }


// Add this import
import Date from '../../components/date';

// export default function Post({ postData }) { //追加_4 //追加_5のためコメントアウト
//   return (
//     <Layout>
//       {/* Keep the existing code here */}

//       {/* Replace {postData.date} with this */}
//       <Date dateString={postData.date} />

//       {/* Keep the existing code here */}
//     </Layout>
//   );
// }  

// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css'; //追加_5

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
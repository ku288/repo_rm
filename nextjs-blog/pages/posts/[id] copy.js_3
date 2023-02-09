// import Layout from '../../components/layout';

// export default function Post() {
//   return <Layout>...</Layout>;
// } i今は行わないの所 コメントアウトする

// import { getAllPostIds } from '../../lib/posts';

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }      fallback: false,と書いてある所で書き込んだ

// import { getAllPostIds, getPostData } from '../../lib/posts';

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }  下と置き換えの為コメントアウトしました

import Layout from '../../components/layout';
//import { getAllPostIds } from '../../lib/posts';
//import { getAllPostIds, getPostData } from '../../lib/posts';
export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }
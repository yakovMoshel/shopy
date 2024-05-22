import styles from './style.module.scss';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getPost } from '@/server/BL/postService';
import SinglePost from '@/Componnets/SinglePost';

export default async function Page({ params }) {
  // connect to MongoDB
  await connectToMongo();

  // get post by id
  const post = await getPost({ _id: params.id });

  // render
  return (
    <div className={styles.postPage}>
      <SinglePost post={post} />
    </div>
  );
}

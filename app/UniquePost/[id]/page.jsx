import styles from './style.module.scss';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getPost } from '@/server/BL/postService';
import SinglePost from '@/Components/SinglePost';

export default async function Page({ params }) {
  await connectToMongo();

  const post = await getPost({ _id: params.id });
  return (
    <div className={styles.postPage}>
      <SinglePost post={post} />
    </div>
  );
}

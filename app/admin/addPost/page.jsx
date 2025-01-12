import AddPostForm from '@/Components/AddPostForm';
import styles from './style.module.scss';

export default function PostsAdminPage() {
  return (
    <div className={styles.postsAdmin}>
      <h1>ניהול פוסטים</h1>
      <AddPostForm />
    </div>
  );
}
import styles from './style.module.css';

type IProps = {
    title: string;
    summary: string;
}
const ArticlePreview: React.FC<IProps> = ({ title, summary}) => {
    return (
      <div className={styles.container}>
          <h2>{title}</h2>
          <p>{summary}</p>
      </div>
    );
}
export default ArticlePreview;
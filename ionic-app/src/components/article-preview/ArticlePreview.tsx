/** The purpose of this component is to be a dummy component, which job it is to showcase the use of css modules. */

import styles from './article-preview.module.css';

type IProps = {
    title: string;
    summary: string;
}

const ArticlePreview: React.FC<IProps> = ({ title, summary }) => {
    return (
      <div className={styles.container}>
          <h2>{title}</h2>
          <p>{summary}</p>
      </div>
    );
}
export default ArticlePreview;
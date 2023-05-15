import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post(props) {
  console.log(props)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          {/* <Avatar hasBorder src="https://github.com/diego3g.png" /> */}
          {/* <Avatar hasBorder={true} src="https://github.com/diego3g.png" /> */}
          <div className={styles.authorInfo}>
            <strong>Edgar Faria Barbosa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="08 de Maio às 07:03" dateTime="2023-05-08 07:03:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
          {/*
                * {' '} é utilizado para adicionar espaço real entre os elementos;
                * Não é uma boa prática. 
            */}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article >
  )
}
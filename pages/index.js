// Importing styles for css and Head for meta data stuff as well as Link for routing.
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import swstyles from '../styles/Starwars.module.css'
import Link from 'next/link'

// Using getStaticProps allows us to fetch the data during the production time. We then pass the results of that fetched data as props so that the Home function can use it.
export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();
  let starwars = data;

  return {
    props: starwars
  }
}

// Creating a home page component that basically just displays all the relevant information.
export default function Home(starwars) {
  return (
    <>
    <Head>
      <title>Starwars Pedia | Home</title>
      <meta name="keywords" content="starwars" />
    </Head>
    <div>
    {/* Using css module styling method instead of styles jsx method. I find it cleaner. */}
      <h1 className={styles.title}>Starwars Pedia</h1>
      
      {/* Mapping our passed prop data so that we can create different cards that hold our fetched data and presented in a semi decent way. */}
      {starwars.results.map(movie => (
        <Link href={'/movies/' + movie.episode_id} key={movie.episode_id}>
          <a className={swstyles.single}>
            <h3>{movie.title}</h3>
            <p className={styles.text}>Episode {movie.episode_id}</p>
          </a>
        </Link>
        )
      )}
      <Link href='/'>
        <a className={styles.btn}>Click the movies above to see more details</a>
      </Link>
    </div>
    </>
  )
}

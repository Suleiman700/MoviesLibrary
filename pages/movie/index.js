import Head from 'next/head'
import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { genreMovie, getGenre, getUrl } from '../../lib/tmdb'
import { pathToSearchMovie } from '../../utils'
import { env } from "../../next.config";

export default function Movie({ data }) {
  return (
    <>
      <Head>
        <title>Movies | {env.APP_NAME}</title>
      </Head>
      <SearchBar
        placeholder='Search for movies'
        searchPath={pathToSearchMovie}
      />
      <Genres
        arr={data.genres}
        media_type='movie'
        oddBgColor='odd:bg-red-700'
      />
    </>
  )
}

export async function getStaticProps() {
  const url = getGenre(genreMovie)
  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

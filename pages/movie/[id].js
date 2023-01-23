import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import FilmCasts from '../../components/film-details/FilmCasts'
import FilmGenres from '../../components/film-details/FilmGenres'
import FilmHeading from '../../components/film-details/FilmHeading'
import FilmImage from '../../components/film-details/FilmImage'
import FilmInfo from '../../components/film-details/FilmInfo'
import FilmRating from '../../components/film-details/FilmRating'
import FilmResources from '../../components/film-details/FilmResources'
import FilmSynopsis from '../../components/film-details/FilmSynopsis'
import Loading from '../../components/Loading'
import SearchBar from '../../components/SearchBar'
import { fetcher, pathToSearchMovie } from '../../utils'

import getWord from "../../utils/Translate";
import {env} from "../../next.config";

export default function Movie({displayLanguage}) {
  const router = useRouter()
  const { id } = router.query
  const { data: movie, error: movieError } = useSWR(`/api/movie/${id}`, fetcher)

  if (movieError) return <div>{movieError}</div>
  if (!movie) return <div>{movieError}</div>

  return (
    <>
      <Head>
        <title>{movie.detail.title} | {env.APP_NAME}</title>
      </Head>
      <SearchBar
        placeholder='Search for movies'
        searchPath={pathToSearchMovie}
      />
      {movie ? (
        <section className='flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center'>
          <FilmImage
            src={movie.detail.poster_path}
            title={movie.detail.title}
          />
          <section className='md:w-3/5'>
            <FilmHeading
              tagline={movie.detail.tagline}
              title={movie.detail.title}
            />
            <FilmRating number={renderRating(movie.detail.vote_average)} />
            <FilmInfo
              media_type='movie'
              language={renderLanguage(movie.detail.spoken_languages || [])}
              length={renderLength(movie.detail.runtime)}
              status={renderStatus(movie.detailstatus)}
              year={renderYear(movie.detail.release_date)}
            />
            <FilmGenres genres={movie.detail.genres || []} />
            <FilmSynopsis synopsis={movie.detail.overview} />
            <FilmCasts casts={movie.credits.cast} />
            <FilmResources
              website={movie.detail.homepage}
              imdb={movie.detail.imdb_id}
            />
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

export function renderRating(rating) {
  if (rating !== undefined) {
    return (rating / 2).toFixed(1)
  } else {
    return 0
  }
}

function renderLength(runtime) {
  if (runtime !== 0 && runtime !== undefined) {
    return runtime + ' min.'
  } else {
    return 'N/A'
  }
}

export function renderLanguage(languages) {
  if (languages.length !== 0) {
    return languages[0].name
  } else {
    return 'N/A'
  }
}

function renderYear(year) {
  if (!year) {
    return 'N/A'
  } else {
    return year.substring(0, 4)
  }
}

export function renderStatus(status) {
  if (!status) {
    return 'N/A'
  } else {
    return status
  }
}

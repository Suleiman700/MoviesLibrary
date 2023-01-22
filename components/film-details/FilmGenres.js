import Translate from "../../utils/Translate";

export default function FilmGenres({ genres, displayLanguage }) {
  console.log(displayLanguage)
  return (
    <div className='mb-6' dir='auto'>
      <h3 className='mb-2 md:text-lg'>{Translate.getWord('genres')}</h3>
      <ul className='flex flex-wrap text-xs font-light md:text-sm'>
        {renderGenres(genres)}
      </ul>
    </div>
  )
}

function renderGenres(arr) {
  if (arr.length !== 0) {
    return arr.map(genre => {
      return (
        <li
          key={genre.id}
          className='mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue'
        >
          {genre.name}
        </li>
      )
    })
  } else {
    return 'N/A'
  }
}
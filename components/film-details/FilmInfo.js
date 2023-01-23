import Translate from "../../utils/Translate";


/**
 * convert minutes to hours and minutes
 * @param _length {string} example: 194 min.
 * @return {string} example: 3 hours 14 minutes
 */
function convertMinutesToHoursMinutes(_length) {
  const lengthInMinutes = _length.replace(/[^0-9]/g, '');
  const hours = Math.floor(lengthInMinutes / 60);
  const minutes = lengthInMinutes % 60;
  return hours + " hours " + minutes + " minutes";
}

export default function FilmInfo({
  firstAir,
  lastAir,
  language,
  length,
  media_type,
  status,
  year,
}) {
  return (
    <>
      {media_type === 'movie' ? (
        <div className='mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg'>
          <div>
            <p className='mb-1 text-app-placeholder'>{Translate.getWord('length')}</p>
            <p className='text-app-pure-white'>{convertMinutesToHoursMinutes(length)}</p>
            {/*<p className='text-app-pure-white'>{length}</p>*/}
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>{Translate.getWord('language')}</p>
            <p className='text-app-pure-white'>{language}</p>
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>{Translate.getWord('year')}</p>
            <p className='text-app-pure-white'>{year}</p>
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>{Translate.getWord('status')}</p>
            <p className='text-app-pure-white'>{status}</p>
          </div>
        </div>
      ) : (
        <div className='mb-6 flex items-center justify-between text-left text-sm lg:w-11/12 lg:text-lg'>
          <div>
            <p className='mb-1 text-app-placeholder'>{Translate.getWord('language')}</p>
            <p className='text-app-pure-white'>{language}</p>
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>First Air</p>
            <p className='text-app-pure-white'>{firstAir}</p>
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>Last Air</p>
            <p className='text-app-pure-white'>{lastAir}</p>
          </div>
          <div>
            <p className='mb-1 text-app-placeholder'>Status</p>
            <p className='text-app-pure-white'>{status}</p>
          </div>
        </div>
      )}
    </>
  )
}

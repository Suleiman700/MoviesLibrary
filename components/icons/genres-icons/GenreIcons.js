import horrorIcon from '../../../assets/genres-icons/horror.png';
import actionIcon from '../../../assets/genres-icons/action.png';
import adventureIcon from '../../../assets/genres-icons/adventure.png';
import animationIcon from '../../../assets/genres-icons/animation.png';
import comedyIcon from '../../../assets/genres-icons/comedy.png';
import crimeIcon from '../../../assets/genres-icons/crime.png';
import documentaryIcon from '../../../assets/genres-icons/documentary.png';
import dramaIcon from '../../../assets/genres-icons/drama.png';
import familyICon from '../../../assets/genres-icons/family.png';
import fantasyIcon from '../../../assets/genres-icons/fantasy.png';
import historyICon from '../../../assets/genres-icons/history.png';
import musicICon from '../../../assets/genres-icons/music.png';
import mysteryIcon from '../../../assets/genres-icons/mystery.png';
import romanceIcon from '../../../assets/genres-icons/romance.png';
import scifiIcon from '../../../assets/genres-icons/sci-fi.png';
import tvIcon from '../../../assets/genres-icons/tv.png';
import thrillerIcon from '../../../assets/genres-icons/thriller.png';
import warIcon from '../../../assets/genres-icons/war.png';
import westernIcon from '../../../assets/genres-icons/western.png';
import kidsIcon from '../../../assets/genres-icons/kids.png';
import newsIcon from '../../../assets/genres-icons/news.png';
import globeIcon from '../../../assets/genres-icons/globe.png';
import filmIcon from '../../../assets/genres-icons/film.png';
import talkIcon from '../../../assets/genres-icons/talk.png';
import politicsIcon from '../../../assets/genres-icons/politics.png';

export default function GenreIcons(_genreName) {
    const genreName = (_genreName['genreName']).toLowerCase()
    let icon = ''
    switch (genreName) {
        case 'action':
            icon = actionIcon.src
            break
        case 'horror':
            icon = horrorIcon.src
            break
        case 'adventure':
            icon = adventureIcon.src
            break
        case 'animation':
            icon = animationIcon.src
            break
        case 'comedy':
            icon = comedyIcon.src
            break
        case 'crime':
            icon = crimeIcon.src
            break
        case 'documentary':
            icon = documentaryIcon.src
            break
        case 'drama':
            icon = dramaIcon.src
            break
        case 'family':
            icon = familyICon.src
            break
        case 'fantasy':
            icon = fantasyIcon.src
            break
        case 'history':
            icon = historyICon.src
            break
        case 'music':
            icon = musicICon.src
            break
        case 'mystery':
            icon = mysteryIcon.src
            break
        case 'romance':
            icon = romanceIcon.src
            break
        case 'science fiction':
            icon = scifiIcon.src
            break
        case 'tv movie':
            icon = tvIcon.src
            break
        case 'thriller':
            icon = thrillerIcon.src
            break
        case 'war':
            icon = warIcon.src
            break
        case 'western':
            icon = westernIcon.src
            break
        case 'action & adventure':
            icon = actionIcon.src
            break
        case 'kids':
            icon = kidsIcon.src
            break
        case 'news':
            icon = newsIcon.src
            break
        case 'reality':
            icon = globeIcon.src
            break
        case 'sci-fi & fantasy':
            icon = scifiIcon.src
            break
        case 'soap':
            icon = filmIcon.src
            break
        case 'talk':
            icon = talkIcon.src
            break
        case 'war & politics':
            icon = politicsIcon.src
            break
        default:
            break
    }


    return (
        // <img src={`https://img.icons8.com/arcade/512/${genreName}.png`} style={{position: 'absolute', width: '70px', opacity: '1'}}></img>
        <img src={icon} style={{position: 'absolute', width: '70px', opacity: '0.2'}}></img>
    )
}
import React from 'react'

import GenreIcons from "./icons/genres-icons/GenreIcons";

/**
 * generate genre card
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly onClick?: *, readonly oddBgColor?: string, readonly href?: *, readonly text?: *}> & React.RefAttributes<unknown>>}
 */
const CardGenre = React.forwardRef(
    ({oddBgColor = 'odd:bg-app-greyish-blue', onClick, href, text}, ref) => {
        return (
            <a
                href={href}
                onClick={onClick}
                ref={ref}
                className={`card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium even:bg-app-semi-dark-blue ${oddBgColor}`}
            >
                <GenreIcons genreName={text} />
                <p style={{zIndex: '10'}}>{text}</p>
            </a>
        )
    }
)

CardGenre.displayName = 'CardGenre'
export default CardGenre

class Translate {
    constructor() {
        this.displayLanguage = 'en'
        this.languages = [
            {
                key: 'en',
                textDirection: 'left',
                genres: 'Genres',
                length: 'Length',
                language: 'Language',
                year: 'Year',
                status: 'Status',
            },
            {
                key: 'ar',
                textDirection: 'right',
                genres: 'الفئات',
                length: 'المدة',
                language: 'اللغة',
                year: 'السنة',
                status: 'الحالة',
            }
        ]
    }

    getWord(_word) {
        const source = this.languages.find(language => language['key'] === this.displayLanguage)
        return source[_word]
    }

    getLanguageDirection() {
        const source = this.languages.find(language => language['key'] === this.displayLanguage)
        return source['textDirection']
    }

    /**
     * set display language
     * @param _language {string} example: english
     */
    setDisplayLanguage(_language) {
        this.displayLanguage = _language
    }

    getDisplayLanguage() {
        return this.displayLanguage
    }
}

export default new Translate()
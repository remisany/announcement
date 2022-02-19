export const required = value => (!value && 'Obligatoire')

export const noSpecialCharacters = value => {
    const pattern = new RegExp('^[a-zA-Z0-9éèêëïàâùç\' -]*$')
    return value && !value.match(pattern) && 'Invalide'
}
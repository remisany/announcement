export const required = value => (!value && 'Obligatoire')

export const noSpecialCharacters = value => {
    const pattern = new RegExp("[a-zA-Z]")
    return value && !value.match(pattern) && "Invalide"
}
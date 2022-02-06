import { guestsData } from "../data/guestsData";

const letters = [
    {forbidden: " ", authorized: ""},
    {forbidden: "-", authorized: ""},
    {forbidden: "ç", authorized: "c"},
    {forbidden: "é", authorized: "e"},
    {forbidden: "è", authorized: "e"},
    {forbidden: "ë", authorized: "e"},
    {forbidden: "ê", authorized: "e"},
    {forbidden: "à", authorized: "a"},
    {forbidden: "â", authorized: "a"},
    {forbidden: "ï", authorized: "i"},
    {forbidden: "ù", authorized: "u"},
]

export const guest = name => {
    let value = name
    value = value.toLowerCase()
    letters.map(letter => value = value.replaceAll(letter.forbidden, letter.authorized))
    return value
}

export const search = values => {
    return guestsData.find(guest => guest.firstname === values.firstname && guest.lastname === values.lastname)
}
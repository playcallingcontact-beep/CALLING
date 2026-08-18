import a1 from '../assets/avatars/1.png'
import a2 from '../assets/avatars/2.png'
import a3 from '../assets/avatars/3.png'
import a4 from '../assets/avatars/4.png'
import a5 from '../assets/avatars/5.png'
import a6 from '../assets/avatars/6.png'
import a7 from '../assets/avatars/7.png'
import a8 from '../assets/avatars/8.png'
import a9 from '../assets/avatars/9.png'

export interface AvatarDef {
  id: string
  name: string
  image: string
}

export const AVATARS: AvatarDef[] = [
  { id: 'a1', name: 'Boucles courtes', image: a1 },
  { id: 'a2', name: 'Fade', image: a2 },
  { id: 'a3', name: 'Boucles serrées', image: a3 },
  { id: 'a4', name: 'Dreads', image: a4 },
  { id: 'a5', name: 'Coupe basse', image: a5 },
  { id: 'a6', name: 'Afro blond', image: a6 },
  { id: 'a7', name: 'Dreads longues', image: a7 },
  { id: 'a8', name: 'Crâne rasé & barbe', image: a8 },
  { id: 'a9', name: 'Boucles longues', image: a9 },
]

export const getAvatar = (id: string | undefined): AvatarDef => AVATARS.find((a) => a.id === id) ?? AVATARS[0]

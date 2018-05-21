import { Price } from 'src/components/Price'
import vampireSrc from './assets/monster/vampire.gif'
import monsterSrc from './assets/monster/monster.gif'
import snakeSrc from './assets/monster/cobra.gif'
import scorpionSrc from './assets/monster/scorpion.gif'
import ragnarokSrc from './assets/monster/ragnarok.gif'

export const MonsterBox = (props) => {
  const resolveImage = (name) => {
    switch (name) {
      case 'vampire':
        return vampireSrc
      case 'snake':
        return snakeSrc
      case 'scorpion':
        return scorpionSrc
      case 'ragnarok':
        return ragnarokSrc
      case 'cthulhu':
        return monsterSrc
    }
  }
  return (
    <a href={`/monster/box/${props.type}`} className='caseMonster'>
      <img src={resolveImage(props.type)} alt={props.name} />
      <div className='price'>
        <span>{props.name}</span>
        <Price amount={300} currency='RUB' />
      </div>
    </a>
  )
}

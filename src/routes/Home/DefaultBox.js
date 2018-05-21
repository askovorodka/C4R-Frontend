import Link from 'src/components/Link'
import { Image } from 'src/components/Image'
import { Title } from './Title'
import { BoxPrice } from './BoxPrice'

export const DefaultBox = (props) => {
  return (
    <Link className={`box ${props.saleType}`} to={`/box/${props.id}`}>
      <Image
        className='box__img'
        image={props.picture || ''}
        fallbackImage={'https://cases4real.com/sites/all/themes/csgo/img/veteranCases/vc_3.png'}>
        image error
      </Image>
      <h3 className='box__name'><Title name={props.box_name} length={16} /></h3>
      {props.prices && <BoxPrice prices={props.prices} />}

      {/* <BoxPrice prices={this.props.prices[0] ? this.props.prices[0] : null}/> */}
    </Link>
  )
}

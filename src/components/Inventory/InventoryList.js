import { Scrollbars } from 'react-custom-scrollbars'
import './styles/inventory-list.scss'
import { InventoryItem } from 'src/components/Inventory/InventoryItem'

export const InventoryList = props => (
  <div className={`inventory-wrap inventory-wrap__${props.view}`}>
    <Scrollbars className='list-wrap'
      renderView={props => <div {...props} className='inventory-list' />}
      renderThumbVertical={props => <div {...props} className='inventory-list__scroll-thumb' />}
    >
      <div className='inventory-list__items'>
        {props.items.map((item, index) =>
          <InventoryItem onSelect={props.onSelect} key={index} item={item} view={props.view} />
        )}
      </div>
    </Scrollbars>
  </div>
)

import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import interrog from '../../svgs/interrogação.jpg';
import {items} from '../../data/items'

type Props = {
    item: GridItemType,
    onClick: ()=>void
}

export const GridItem = ({item, onClick}: Props) =>{
    return (
        <C.Container 
            
            onClick={onClick}>
            {item.permanentShow === false && item.show === false && 
                <C.Icon src={interrog} alt=""/>
            }
            
            {(item.permanentShow || item.show) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt=""/>
            }
            
        </C.Container>
    )
}
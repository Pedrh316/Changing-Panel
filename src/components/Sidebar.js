import React from 'react';
import Item from './Item';
import { useItemConfig } from '../hooks/useItemConfig';

export default function Sidebar(){
    let ItemsConfig = useItemConfig();
    
    return (
        <div className="sidebar">
            <h2 className="itemContainer__title">Ver Componentes</h2>
            <ul>
            {
                ItemsConfig.map(itemConfig => <li key={itemConfig.id}><Item {...itemConfig}/></li>)
            }
            </ul>
        </div>
    )
}
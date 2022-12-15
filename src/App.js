import React from 'react';
import Sidebar from './components/Sidebar.js';
import PanelMain from './components/PanelMain';
import Componente1 from './components/Componente1';
import About from './components/About';
import PanelForm from './components/PanelForm';
import './css/style.css';

export let ItemConfig = React.createContext(null);

export default function App(){
       
    let [itemsConfig, setItemsConfig] = React.useState([
        {
            id:1,
            title:'Principal',
            handleClick:changePanelComponent,
            isSelected:true,
        },
        {
            id:2,
            title:'Componente Vazio',
            handleClick:changePanelComponent,
            isSelected:false,
        },
        {
            id:3,
            title:'Sobre mim',
            handleClick:changePanelComponent,
            isSelected:false,
        },
        {
            id:4,
            title:'Formulário',
            handleClick:changePanelComponent,
            isSelected:false,
        }
    ]);

    let allPanels = [
        <PanelMain id={1} />,
        <Componente1 id={2} />,
        <About id={3} />,
        <PanelForm id={4} />,
    ]

    let [currentPanelComponent, setcurrentPanelComponent] = React.useState(<PanelMain/>);
    
    function changePanelComponent(itemId){    
        let panel = allPanels.find(panel => panel.props.id === itemId)
        setcurrentPanelComponent(panel);        
        setItemsConfig(prevItemsConfig => {
            return prevItemsConfig.map(itemConfig => (
                itemConfig.id == itemId ? {...itemConfig, isSelected:true} : {...itemConfig, isSelected:false}
            ))
        }) 
    }

    return (
        <div>
            <div className="boxContainer">
            <div className="itemContainer">
                <ItemConfig.Provider value={itemsConfig}>
                    <Sidebar/>
                </ItemConfig.Provider>
            </div>
            <div  className="panel">
                {currentPanelComponent}
            </div>
            </div>
        </div>
    )
}

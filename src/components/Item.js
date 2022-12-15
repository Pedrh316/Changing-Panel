import '../css/item.css';

export default function Item(props){
    let {id, title, handleClick, isSelected} = props;
    return (
        <button className={`item ${isSelected ? 'item-selected' : ''}`} onClick={() => handleClick(id)} onKeyDown={(e) => e.key == "Enter" && handleClick(id)} >
            <h3 className="item-title">{title}</h3>
        </button>
    )
}
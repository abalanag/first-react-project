// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }

export default function TabButton({children, onSelect, isSelected}) {

    return <li><button onClick={onSelect} className={isSelected === true && "active"}>{children}</button></li>
}
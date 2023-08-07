const defaultElements = [
  "Texto 1",
  "Texto 2",
  "Texto 3"
]

type ListProp = {
  customElements?: Array<string>;
}


const ListItemsText = ({ customElements = defaultElements}: ListProp) => 
  <ul>
    {customElements.map((text) => (
      <li key={text}>{text}</li>
    ))}
  </ul>

export default ListItemsText;
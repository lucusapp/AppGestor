import { getItembycategory } from "../../selectors/getItembycategory"


const fiscallist = ({clase}) => {

    const categoria = getItembycategory(clase)

  return (
    <>
    <h1>Fiscal List - {clase}</h1>
    <ul>
        {
            categoria.map(item => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))  
}
    </ul>
      
    </>
  )
}
export default fiscallist

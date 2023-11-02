export const CoreComponent = (props)=>{
    return(
      <li>
      <img src={props.img} alt={props.title}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </li>
    )
  }
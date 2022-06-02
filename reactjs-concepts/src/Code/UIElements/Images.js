
export function MyImage(props) {
    if (props.roundedBorder)
        return (
            <img src={props.url} alt={props.alt} style={{width: `${props.width}%`, height: 'auto', borderRadius: '7px 7px 7px 7px'}} />
        )
    else
        return(
            <img src={props.url} alt={props.alt} style={{width: `${props.width}%`, height: 'auto',}} />
        )
}

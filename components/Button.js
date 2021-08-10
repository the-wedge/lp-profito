export default function Button(props) {
    return(
        <button type={props.type} className="bg-yellow-700 hover:bg-opacity-75 text-white py-2 px-6 my-5">
            {props.name}
        </button>
    )
}

export default function Button(props) {
    return(
        <button type={props.type} class="bg-yellow-700 hover:bg-opacity-75 text-white py-2 px-6 mt-3">
            {props.name}
        </button>
    )
}

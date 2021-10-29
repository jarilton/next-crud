export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center text-3xl" >
            <h1 className="px-5 py-2" >
                {props.children}
            </h1>
            <hr className="border-2 border-yellow-600" />
        </div>
    )
}
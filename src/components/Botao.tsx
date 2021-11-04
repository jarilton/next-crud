interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children: any
}

export default function Botao(props) {
    return (
        <button className={`
            bg-gradient-to-r from-green-400 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.classname}
        `}>
            {props.children}
        </button>
    )
}
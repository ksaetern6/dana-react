interface HeaderLinkProps {
    name: string,
    primary?: boolean
}

export default function HeaderLink({ name , primary}: HeaderLinkProps): React.ReactElement {
    const displayBold = primary == true ? 'font-semibold' : ''

    return (
        <>
            <li 
                className={`hover:bg-gray-100 p-1 rounded-sm mr-1 cursor-pointer tracking-widest ${displayBold}`}>
                    { name }
            </li>
        </>
    )
}
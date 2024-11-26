import { ChevronDownIcon } from "@heroicons/react/16/solid";


interface CategoryProps {
    categoryName: string,
}

export default function Category({categoryName}: CategoryProps): React.ReactElement {

    return (
        <>
        <div className="flex flex-row items-center [&:first-child]:pl-0 pl-16">
            <li
                className="capitalize text-md hover:underline hover:decoration-2 cursor-pointer"
                onMouseEnter={() => console.log("enter")}
                onMouseLeave={() => console.log("leave")}>
                    {categoryName}
            </li>
            <ChevronDownIcon className="size-4 opacity-45 pt-1" />
        </div>

        </>
    )
}
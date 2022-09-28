
import React from "react";


type ListManagerProps<T> = {
    data: T[] | undefined,
    renderer: (item: T) => React.ReactNode
    className: {
        container: string | undefined,
        item: string | undefined
    }
};


const ListManager = <T,> (props: ListManagerProps<T>) => {
    const { data, renderer, className } = props;

    return ( 
        <ul className={className ? className.container : 'card-container'}>
            {data?.map((_data, _index) => (
                <li className={`${className?.item} card-item`} key={_index}>
                    {renderer(_data)}
                </li>
            ))}
        </ul>
     );
}
 
export default ListManager;

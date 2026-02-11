
interface FilterListProps {
    FilterSet: (filter: 'All' | 'TV' | 'Movie') => void;
    filter: 'All' | 'TV' | 'Movie';
}


function FilterList({ FilterSet }: FilterListProps) {
    return (<div className="flex flex-row gap-2 m-2">
        Filter List Component
        <button onClick={() => FilterSet('All')}>ALL</button>
        <button onClick={() => FilterSet('TV')}>TV</button>
        <button onClick={() => FilterSet('Movie')}>MOVIE</button>

    </div>)
}






export default FilterList;
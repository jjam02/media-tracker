
import './FilterList.css';

interface FilterListProps {
    FilterSet: (filter: 'All' | 'TV' | 'Movie') => void;
    filter: 'All' | 'TV' | 'Movie';
}

function FilterList({ FilterSet, filter }: FilterListProps) {
    const options: Array<{ key: 'All' | 'TV' | 'Movie'; label: string }> = [
        { key: 'All', label: 'All' },
        { key: 'TV', label: 'TV' },
        { key: 'Movie', label: 'Movie' },
    ];

    return (
        <div className="filter-list" role="group" aria-label="Filter media">
            {options.map((opt) => {
                const isActive = filter === opt.key;

                return (
                    <button
                        key={opt.key}
                        onClick={() => FilterSet(opt.key)}
                        className={`filter-btn ${isActive ? 'filter-btn--active' : 'filter-btn--inactive'}`}
                        aria-pressed={isActive}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
}






export default FilterList;
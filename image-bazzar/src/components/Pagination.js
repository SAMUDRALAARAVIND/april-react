const Pagination = ({ pageNumber, setPageNumber, isLoading }) => {

    const isPrevDisabled = pageNumber === 1 || isLoading;

    return <div className="pagination">
        <div className="box">
            <button
                disabled={isPrevDisabled}
                onClick={() => setPageNumber(prev => prev - 1)}
                className="material-icons"
            >chevron_left</button>
            <span>{pageNumber}</span>
            <button
                disabled={isLoading}
                onClick={() => setPageNumber(prev => prev + 1)}
                className="material-icons"
            >chevron_right</button>
        </div>
    </div>
}

export default Pagination
const Filters = ({ categoriesList, selectedCategory, setCategory }) => {
    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    return <div className="categories-list">
        {
            categoriesList.map(category => {
                return (
                    <div className="category">
                        <input
                            id={category}
                            type="radio"
                            value={category}
                            checked={category === selectedCategory}
                            name="category"
                            onChange={onChangeCategory}
                        />
                        <label htmlFor={category}>{category}</label>
                    </div>
                )
            })
        }
    </div>
}

export default Filters;
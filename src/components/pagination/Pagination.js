import React from "react";

const Pagination = (props) => {
    const { pagination } = props;
    const { _limit, _page, _totalRows } = pagination;

    let totalPage = Math.ceil(_totalRows / _limit)

    const handleChangePage = (newPage) => {
        props.changePage(newPage)
    }

    return (
        <div>
            <button disabled={_page <= 1} onClick={() => handleChangePage(_page - 1)}>Prev</button>
            <button disabled={_page >= totalPage} onClick={() => handleChangePage(_page + 1)}>Next</button>
        </div>
    )
}

export default Pagination
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Todo from "../todos/Todo";

const ListTodo = () => {
    const [listTodo, setListTodo] = useState([])
    //const [page, setPage]
    const [pagination, setPagination] = useState({
        _limit: 10,
        _page: 1,
        _totalRows: 10
    })

    const [filter, setFilter] = useState({
        pagination: pagination
    })

    useEffect(() => {
        const fetchData = async () => {
            let todos = await axios(`http://js-post-api.herokuapp.com/api/posts?_limit=${pagination._limit}&_page=${pagination._page}`)
            setListTodo(todos.data.data)
            setPagination(todos.data.pagination)
            console.log('>>> check todos: ', todos)
        }

        fetchData();

    }, [filter])

    const changePage = (newPage) => {
        console.log('>>> check new page: ', newPage)
        setPagination({ ...pagination, _page: newPage })
        setFilter({ ...filter, pagination })
    }

    return (
        <div>
            <Todo listTodo={listTodo} />
            <Pagination changePage={changePage} pagination={pagination} />
        </div>
    )
}

export default ListTodo
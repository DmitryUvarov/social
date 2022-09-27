import React from 'react'
import style from './Pagination.module.scss'

export const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let newPageNumbers = []
    let createPagesNumber = () => {
        if (props.currentPage === 1 && pagesCount <= 5) {
            newPageNumbers.push(...pages)
        }
        else if (props.currentPage === 1 && pagesCount > 5) {
            let slice = pages.slice(props.currentPage, props.currentPage + 2)
            let newPageNumbersArr = [props.currentPage, ...slice, '...', pagesCount];
            newPageNumbers.push(...newPageNumbersArr)
        }
        else if (props.currentPage === 2 && pagesCount > 5) {
            let slice = pages.slice(props.currentPage, props.currentPage + 1)
            let newPageNumbersArr = [1, props.currentPage, ...slice, '...', pagesCount];
            newPageNumbers.push(...newPageNumbersArr)
        }
        else if (props.currentPage >= 3 && props.currentPage < pagesCount - 2 && pagesCount > 5) {
            let slice = pages.slice(props.currentPage - 2, props.currentPage + 1)
            let newPageNumbersArr = [1, '...', ...slice, '...', pagesCount];
            newPageNumbers.push(...newPageNumbersArr)
        }
        else if (props.currentPage >= pagesCount - 2 && props.currentPage < pagesCount - 1 && pagesCount > 5) {
            let slice = pages.slice(props.currentPage - 2, props.currentPage + 1)
            let newPageNumbersArr = [1, '...', ...slice, pagesCount];
            newPageNumbers.push(...newPageNumbersArr)
        }
        else if (props.currentPage >= pagesCount - 1 && pagesCount > 5) {
            let slice = pages.slice(props.currentPage - 2, props.currentPage + 1)
            let newPageNumbersArr = [1, '...', ...slice];
            newPageNumbers.push(...newPageNumbersArr)
        }
        else if (props.currentPage >= 1 && props.currentPage <= 5) {
            newPageNumbers.push(...pages)
        }

    }
    createPagesNumber()

    return (
        <div className={style.paginationsBlock}>
            {props.isFetching === true
                ? pages.length > 1
                    ? <div className={style.paginations}>
                        <span
                            className={props.currentPage === 1 ? `${style.arrrow + ' ' + style.disabled}` : `${style.arrrow}`}
                            onClick={(e) => props.prevPage(props.currentPage)}
                        >prev</span>
                        {newPageNumbers.map((page, index) => {
                            return <span
                                className={props.currentPage === page ? style.selectedPage : ''}
                                key={index}
                                onClick={(e) => props.onPageChanged(page)}
                            >{page}</span>
                        })}
                        <span
                            className={props.currentPage === pagesCount ? `${style.arrrow + ' ' + style.disabled}` : `${style.arrrow}`}
                            onClick={(e) => props.nextPage(props.currentPage, pagesCount)}
                        >next</span>
                    </div>
                    : ''
                : ''
            }
        </div>
    )
}

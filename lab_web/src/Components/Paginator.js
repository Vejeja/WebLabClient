import { useState } from "react";

export default function Paginator(prop) {

    const [currentPage, setCurrentPage] = useState(0);
    const pages = makePages(prop.children);
    
    const prevPage = ()=>{
        if (currentPage > 0) setCurrentPage(currentPage-1);
    }
    const nextPage = ()=>{
        if (currentPage < pages.length-1) setCurrentPage(currentPage+1);
    }

    return (
        <div>
            <div className='concert'>
                {pages[currentPage]}
            </div>
            <div className='pagingControll'>
                <button className="paging_button1" onClick={prevPage}>&lt;-</button>
                {
                    pages.map((elem, index) => {
                        if (index >= currentPage || index < currentPage-3) 
                            return null;
                        return <button on
                                className="paging_button2" 
                                key={index}
                                onClick={()=>{setCurrentPage(index)}}>
                                    {index+1}
                            </button>
                    })
                }
                <label>{currentPage+1}</label>
                {
                    pages.map((elem, index) => {
                        if (index <= currentPage || index > currentPage+3) 
                            return null;
                        return <button
                                className="paging_button2"
                                key={index}
                                onClick={()=>{setCurrentPage(index)}}>
                                    {index+1}
                            </button>
                    })
                }
                <button className="paging_button1" onClick={nextPage}>-&gt;</button>
            </div>
        </div>
    )
}

function makePages(children){
    const numberOnPage = 3;
    const pages = [];
    for (const childIndex in children){
        const page = Math.floor(childIndex/numberOnPage);
        if (!pages[page]) pages.push([]);
        pages[page].push(children[childIndex]);
    }
    return pages;
}

export default function Pagination({ items, pageSize, currentPage, onPageChange }) {

    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    /* console.log(pages) */
    
    return (
        <div className="w-full flex justify-center ">
            <ul className="w-max gap-3 flex flex-row justify-between items-center font-body">
                {pages.map((page) => (
                    <li key={page} className={ page === currentPage ? "flex items-center justify-center w-8 h-8 border border-white rounded-lg cursor-pointer bg-red-400" : "flex justify-center items-center w-8 h-8 border border-white rounded-lg cursor-pointer"}>
                        <a className="cursor-pointer" onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
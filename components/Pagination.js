export default function Pagination({ items, pageSize, currentPage, onPageChange }) {

    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    /* console.log(pages) */
    
    return (
        <div className="w-full flex justify-center ">
            <ul className="w-max gap-3 flex flex-row justify-between items-center font-body text-white">
                {pages.map((page, index) => (
                    <li key={index} onClick={() => onPageChange(page)} className={ page === currentPage ? "flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer bg-[#161E2F]" : "flex justify-center items-center w-8 h-8 bg-[#161E2F]/50 rounded-lg cursor-pointer"}>
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    )
}
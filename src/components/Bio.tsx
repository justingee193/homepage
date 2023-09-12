export default function Bio({ year, children }) {
    return (
       <div className="flex gap-4">
            <span className="text-lg font-semibold ">{year}</span>{children}
       </div> 
    )
}

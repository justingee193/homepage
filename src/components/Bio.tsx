export default function Bio({ year, children }) {
    return (
       <div className="flex gap-4">
            <span className="font-semibold pr-4">{year}</span>{children}
       </div> 
    )
}

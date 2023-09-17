export default function Bio({ year, children }) {
    return (
       <div className="flex">
            <span className="font-semibold mr-4">{year}</span>{children}
       </div> 
    )
}

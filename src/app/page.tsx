export default function Home() {
    return (
        <>
            <h1 className='font-bold'>Welcome to my homepage!</h1>
            <div>
                <div className="overflow-hidden h-fit rounded-lg border border-gray-200">
                    <p>
                        Portfolio
                    </p>
                </div>
                <div className="overflow-hidden h-fit roundend-lg border border-red-200">
                    <dl>
                        <div>
                            <p>
                                Project 1
                            </p>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

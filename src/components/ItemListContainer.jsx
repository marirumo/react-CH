

const ItemListContainer = ({ greeting }) => {

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-violet-400 p-8 sm:p-12">
            <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
                <div className="flex flex-col items-center">

                    <h1 className="block max-w-2xl mt-4 text-xl dark:text-gray-800">{greeting}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
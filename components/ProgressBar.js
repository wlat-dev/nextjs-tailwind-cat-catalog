export default function ProgressBar({ color, propertyName, rating }) {
    const widthAmount = () => {
        if (rating == 0) return `0`
        else if (rating == 5) return `full`
        else return `${rating}/5`
    }

    return (
        <>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${color}-600 bg-${color}-200`}>
                            {propertyName}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className={`text-xs font-semibold inline-block text-${color}-600`}>
                            {rating}
                        </span>
                    </div>
                </div>
                <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${color}-200`}>
                    <div className={`w-${widthAmount()} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}></div>
                </div>
            </div>
        </>
    )
}
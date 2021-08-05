/**
 * 
 * PurgeCSS:
 * text-red-200
 * text-green-200
 * text-yellow-200
 * text-gray-200
 * text-purple-200
 * text-indigo-200
 * text-blue-200
 * text-pink-200
 * text-red-500
 * text-green-500
 * text-yellow-500
 * text-gray-500
 * text-purple-500
 * text-indigo-500
 * text-blue-500
 * text-pink-500
 * text-red-600
 * text-green-600
 * text-yellow-600
 * text-gray-600
 * text-purple-600
 * text-indigo-600
 * text-blue-600
 * text-pink-600
 */

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
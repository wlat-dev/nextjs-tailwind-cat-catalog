
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar";

export const getCatImage = (cat) => {
  if (cat && cat.image && Object.keys(cat.image).length) {
    return (
      <div className="h-64 relative">
        <Image
          src={cat.image.url}
          alt={`${cat.description} image`}
          layout="fill"
          objectFit="cover"
          quality="50"
          className="rounded-t-lg"
        />
      </div>
    )
  } else {
    return (
      <div className="h-64 relative">
        <Image
          src="/fallbackKitty.svg"
          alt={`${cat.description} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
    )
  }
}

export default function CatHome({ catBreeds }) {
  return (
    <div className="p-28 bg-blue-50">
      <div className="font-mono flex justify-center p-8 bg-clip-text text-transparent bg-gradient-to-bl from-indigo-200 to-indigo-800 font-black">
        <div className="inline-block text-4xl">catalog</div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {catBreeds.map((cat) => (
          <Link href={`/cats/${cat.id}`} key={cat.id} >
            <a className="flex flex-col my-auto rounded-lg shadow focus:ring-4 focus:ring-indigo-300 md:hover:shadow-2xl transition duration-300 ease-in-out md:transform hover:-translate-y-2 ">
              {getCatImage(cat)}
              <div className="flex justify-center shadow rounded-b-lg px-4 bg-white">
                <div className="flex-grow text-gray-900">
                  <div className="py-4">
                    <div className="flex flex-wrap">
                      <div className="font-bold text-xl mr-2">
                        {cat.name}
                      </div>
                      <div className="flex flex-row font-semibold text-xs">
                        {(cat.rare == 1) && <div className="uppercase text-yellow-600 rounded-full my-auto mr-2 p-1 bg-yellow-200">
                          rare
                        </div>}
                        {(cat.hypoallergenic == 1) && <div className="uppercase text-green-600 rounded-full my-auto mr-2 p-1 bg-green-200">
                          hypoallergenic
                        </div>}
                        {(cat.hairless == 1) && <div className="uppercase text-blue-600 rounded-full my-auto p-1 bg-blue-200">
                          hairless
                        </div>}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-500 opacity-80 rounded-full">
                      {(cat.weight.imperial) && <div className="inline-block mr-1">{cat.weight.imperial.replace(/\s/g, '')} lbs</div>}
                      {(cat.weight.metric) && <div className="inline-block border-l-2 border-indigo-300 pl-1">{cat.weight.metric.replace(/\s/g, '')} kgs</div>}
                    </div>
                    <div className="text-xs font-normal text-gray-500 py-1">
                      {cat.temperament}
                    </div>
                    <div className="mt-2">
                      <ProgressBar color="indigo" propertyName="energy level" rating={cat.energy_level} />
                      <ProgressBar color="pink" propertyName="health issues" rating={cat.health_issues} />
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div >
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/breeds')
  const catBreeds = await res.json()

  return {
    props: {
      catBreeds,
    }
  }
}
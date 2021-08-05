
import ProgressBar from "../../components/ProgressBar";

const CatDetails = ({ cat }) => {
  return (
    <div className="p-28 bg-blue-50">
      <div className="flex justify-center shadow rounded-b-lg px-4 bg-white">
        <div className="flex-grow text-gray-900">
          <div className="py-4">
            <div className="flex flex-wrap">
              <div className="font-mono text-3xl py-3">
                {cat.name}: all properties
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
              {
                Object.keys(cat).map(attr => {
                  if (!isNaN(cat[attr])) {
                    return <ProgressBar color="gray" propertyName={attr} rating={cat[attr]} key={attr} />
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      cat: data,
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/breeds');
  const data = await res.json();

  const paths = data.map((cat) => ({
    params: { id: cat.id.toString() }
  }));

  return {
    paths,
    fallback: false,
  };
};

export default CatDetails
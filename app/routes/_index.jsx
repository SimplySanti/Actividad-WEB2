import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";


export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-700 to-80%">
        <div className="bg-white h-16">
          <h1 className="font-sans text-purple-400 font-extrabold text-center p-5 text-4xl">CATSITE</h1>
        </div>
        <div class="my-10 flex flex-col items-center">
          <div>
            <h2 className="text-white py-5 font-sans font-bold">Load unlimited cat images and gifs.</h2>
          </div>
          <container className="mx-auto border-4 border-solid bg-white">
            <img className="h-96 mx-auto object-contain" src={data[0].url} />
          </container>
          <div className="my-10">
            <Link class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2" to="/">Next Cat</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function loader() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  return await res;
}
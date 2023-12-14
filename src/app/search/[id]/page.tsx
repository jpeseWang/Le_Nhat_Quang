"use client";
import useSWR from "swr";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/Search/SearchBar";
import { GifCard } from "@/components/Media/GifCard";
import fetcher from "@/lib/fetch";
interface SearchResultPageProps {
  params: any;
}
export default function SearchResultPage({ params }: SearchResultPageProps) {
  const trendingConfig = {
    baseUrl: process.env.baseURL,
    apiKey: process.env.REACT_APP_GIPHY_API_KEY,
  };

  const { data, mutate, error, isLoading }: any = useSWR(
    `${trendingConfig.baseUrl}/search?api_key=${trendingConfig.apiKey}&q=${params.id}`,
    fetcher,
  );
  console.log(params);
  return (
    <main className="">
      <Header />
      <SearchBar />

      <div className="mx-auto mt-6  max-w-6xl items-center lg:px-8">
        <div className="my-4 flex">
          <div className="flex">
            <p className="text-3xl font-semibold text-white">
              {params.id}{" "}
              <span className="text-base text-gray-400">
                {data?.data.length} GIFs
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 ">
          {data &&
            data.data.map((item: any) => (
              <GifCard
                title={item.title}
                imgSrc={item.images.downsized.url}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

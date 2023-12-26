import { useJsonFetch } from "../hooks/useJsonFetch";

type props = {
  url: string
}

export default function FetchData({url} : props) {
  const [data, error, loading] = useJsonFetch(url);
  return (
    <div>
      <h2>
        Status: {error?.message} {loading ? "Loading..." : data?.status}
      </h2>
    </div>
  )
}

import SearchBar from "@/component/SearchBar";

export default async function Home(){
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>Weather App</h1>
    <SearchBar />
  </div>
  )
}
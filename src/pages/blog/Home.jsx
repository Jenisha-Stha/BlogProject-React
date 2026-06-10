import Layout from "../../components/Layout/Layout"
import Card from "./Cards/Card"

const Home = () => {
  return (
    <>
    <Layout>
      <div className="flex flex-wrap justify-center space-x-9 mt-5 ">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
    </Layout>
    </>
  )
}

export default Home
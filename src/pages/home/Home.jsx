
import Chart from "../../Components/chart/Chart";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";

export default function Home() {
    return (
        <div className="home">
         <Featuredinfo />
        <Chart />
        </div>
    );
}

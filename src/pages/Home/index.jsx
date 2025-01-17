import { useState } from "react"
import Banner from "../../components/Banner"
import Header from "../../components/Header"
import StyledMainContainer from "../../components/MainContainer"
import TeamCategory from "../../components/TeamCategory"
import Footer from "../../components/Footer"


const Home = () => {
    const [teamCategory, setTeamCategory] = useState([
        { id: 1, name: "Front End", color: "#6BD1FF" },
        { id: 2, name: "Back End", color: "#00C86F" },
        { id: 3, name: "Mobile", color: "#FFBA05" },
    ]);

    return (
        <>
            <Header />
            <Banner />
            <StyledMainContainer>
                <TeamCategory categories={teamCategory} />
            </StyledMainContainer>
            <Footer />
        </>
    )
}

export default Home
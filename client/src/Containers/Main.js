import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero.js";
import About from "../Components/About.js";
import Services from "../Components/Services.js";
import Testimonials from "../Components/Testimonials.js";
import Worker from "../Components/Worker.js";
import Team from "../Components/Team.js";
import FAQ from "../Components/FAQ.js";
import Footer from "../Components/Footer.js";

function Main() {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<Worker />
			<Team />
			<FAQ />
			<Footer />
		</main>
	);
}

export default Main;

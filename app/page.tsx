import HeroSection from "@/components/hero-section";
import About from "@/components/about-section";
import Timeline from "@/components/timeline-section";
import CodeShowcase from "@/components/code-showcase";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col">
				<HeroSection />
				<About />
				<Timeline />
				<CodeShowcase />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}

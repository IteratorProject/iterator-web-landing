import { Hero } from "../components/Hero";
import { TheStory } from "../components/TheStory";
import { LoopWrapper } from "../components/TheLoop";
import { TheJourney } from "../components/TheJourney";
import { TheInspiration } from "../components/TheInspiration";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { getAllArticles } from "../lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="story">
        <TheStory />
      </div>
      <div id="loop">
        <LoopWrapper articles={articles} />
      </div>
      <div id="inspiration">
        <TheInspiration />
      </div>
      <div id="journey">
        <TheJourney />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

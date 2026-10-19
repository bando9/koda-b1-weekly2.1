import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Card from "../../features/project/card";

export default function Project() {
  return (
    <div>
      <NavBar />
      <main>
        <Header
          label="portfolio"
          title="my projects"
          description="A collection of work that demonstrates my skills across the full development stack."
        />

        <section className="py-16 px-6">
          <div className="flex justify-center items-center gap-3">
            <p className="rounded-full bg-[#111111] py-2.5 px-5 font-medium  text-white text-sm">
              All
            </p>
            <p className="pill">Frontend</p>
            <p className="pill">Backend</p>
            <p className="pill">Full Stack</p>
          </div>

          <div className="mt-12 space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-28">
            <Card
              techs={["React", "Node.js", "MongoDB", "Stripe"]}
              title="ShopEase"
              src="work1"
              description="A full-featured e-commerce platform with product catalog, shopping cart, order history, wishlists, and Stripe payment integration."
              label="Full Stack"
            />

            <Card
              title="TaskFlow"
              src="work2"
              description="A drag-and-drop task management app with real-time collaboration, team workspaces, priority labels, and deadline tracking."
              label="Frontend"
              techs={["React", "TypeScript", "Firebase"]}
            />
            <Card
              title="WeatherNow"
              src="work3"
              description="A weather dashboard with 7-day forecasts, hourly charts, interactive maps, and location-based weather alerts powered by OpenWeather."
              label="Frontend"
              techs={["React", "OpenWeather API", "CSS3"]}
            />
            <Card
              title="ChatSpace"
              src="work3"
              description="Real-time messaging platform with channels, direct messages, file sharing, emoji reactions, and user presence indicators."
              label="Full Stack"
              techs={["React", "Socket.io", "Express", "MongoDB"]}
            />
            <Card
              title="PortfolioGen"
              src="work4"
              description="A no-code portfolio builder that generates beautiful, responsive developer websites from a simple guided multi-step form."
              label="Full Stack"
              techs={["Next.js", "Tailwind CSS", "Supabase", "Vercel"]}
            />
            <Card
              title="BlogCMS"
              src="work5"
              description="A headless CMS and blog platform with Markdown support, tags, categories, scheduled publishing, and an admin dashboard."
              label="Backend"
              techs={["Next.js", "PostgreSQL", "Prisma", "TypeScript"]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

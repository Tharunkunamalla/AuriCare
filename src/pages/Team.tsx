import {Helmet} from "react-helmet-async";
import {Card, CardContent} from "@/components/ui/card";

const team = [
  {
    name: "Sidharth",
    title: "Team Leader & AI-Chatbot desginer",
    desc: "Leads strategy, clinical partnerships.",
  },
  {
    name: "Venkat",
    title: "Lead AI-Chatbot engineer",
    desc: "",
  },
  {
    name: "Tharun",
    title: "Frontend and backend",
    desc: "developed UI  and backend services",
  },
  {
    name: "SivaSai",
    title: "Frontend & UI ",
    desc: " developed UI and  auth page",
  },
];

const Team = () => {
  const canonical =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : "";
  return (
    <main className="container mx-auto py-12">
      <Helmet>
        <title>Team — AuriCare</title>
        <meta
          name="description"
          content="Meet the AuriCare team building accessible autism support tools."
        />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      <h1 className="text-3xl font-heading font-semibold">Our Team</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <Card key={m.name} className="hover-scale">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="hover-scale">
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium">Join Our Team</h3>
            <p className="text-sm text-muted-foreground">
              We’re adding future roles across clinical research, design, and
              engineering.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Team;

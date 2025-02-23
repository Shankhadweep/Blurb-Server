const corsOptions = {
  origin: [
    "*",
    "https://blurb-frontend-hnog-fschbha21-shankhadweep-hazras-projects.vercel.app/"
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };

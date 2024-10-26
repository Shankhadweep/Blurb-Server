const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://blurb-frontend-hnog-2lbj0kir1-shankhadweep-hazras-projects.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };

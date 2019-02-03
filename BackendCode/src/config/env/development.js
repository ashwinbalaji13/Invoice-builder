export const devconfig = {
  port: 3000,
  secret: "ahgd123",
  database: "invoice-builder",
  google: {
    clientId: "864980131343-ls5bc0r310qsv75i3rt3mhv4ntpt4t06.apps.googleusercontent.com",
    clientSecret: "ND4Kyxz4mlTiSNSr56D8iBOw",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  github: {
    clientID: "d3420b21c328dd62bd35",
    clientSecret: "548c1f462c8f936e72e67fba95fe1def533ad36d",
    callbackURL: "http://localhost:3000/api/auth/github/callback"
  }
};

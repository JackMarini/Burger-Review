const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/Boston-Burger-Reviews_development",
      test: "postgres://postgres:postgres@localhost:5432/Boston-Burger-Reviews_test",
      e2e: "postgres://postgres:postgres@localhost:5432/Boston-Burger-Reviews_e2e",
      
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;

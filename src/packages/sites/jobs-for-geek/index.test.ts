import JobsForGeekSite from ".";

describe("JobsForGeekSiteTests", () => {
  const jobsForGeekSite = new JobsForGeekSite();

  test("getOffers executes without error", () => {
    jobsForGeekSite.getOffers();
  });

  test("getOffers returns expected Type Array<JobOffer>", async () => {
    const output = await jobsForGeekSite.getOffers();
    expect(Array.isArray(output)).toEqual(true);
  });
});

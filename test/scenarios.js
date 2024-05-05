const basicTestSettings = {
  onBeforeScript: "",
  cookiePath: "backstop_data/engine_scripts/cookies.json",
  readyEvent: "",
  readySelector: "",
  delay: 0,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: "",
  clickSelector: "",
  postInteractionWait: 0,
  selectors: [],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.5,
  requireSameDimensions: true,
  postInteractionWait: "",
};

const home = {
  label: "Homepage Samsung Knox",
  url: "https://www.samsungknox.com/en",
  referenceUrl: "https://www.samsungknox.com/fr",
};
// const courses = {
//   label: "Courses learn.rtcamp",
//   url: "https://learn.rtcamp.com/courses",
//   referenceUrl: "https://learn.rtcamp.com/course",
// };

const scenarios = [home];

function addBasicTestSettings(scenarios) {
  return scenarios.map((scenario) => {
    return { ...scenario, ...basicTestSettings };
  });
}

module.exports = addBasicTestSettings(scenarios);

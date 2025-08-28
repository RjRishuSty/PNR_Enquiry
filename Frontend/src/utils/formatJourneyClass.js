export const formatJourneyClass = (cls) => {
  switch (cls) {
    case "SL":
      return "Sleeper ";
    case "3A":
      return "AC 3 Tier";
    case "2A":
      return "AC 2 Tier";
    case "1A":
      return "AC First ";
    case "CC":
      return "AC Chair Car";
    case "2S":
      return "Second Sitting";
    default:
      return cls;
  }
};

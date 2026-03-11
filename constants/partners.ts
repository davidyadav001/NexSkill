const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/NexSkill" : "";

export const partners = [
  { name: "Cloud Education", logo: `${prefix}/images/partner-cloud.png` },
  { name: "CMC", logo: `${prefix}/images/partner-cmc.png` },
  { name: "SNP", logo: `${prefix}/images/partner-snp.png` },
  { name: "Zebec", logo: `${prefix}/images/partner-zebec.png` },
];

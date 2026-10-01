export const site = {
  name: "Mamlakato Chaye Ltd",
  companyNumber: "16881675",
  address: "124-128 City Road, London, EC1V 2NX",
  emails: ["mamlakatochaye@gmail.com", "mamlakatochayeltd26@outlook.com"],
  phoneDisplay: "+44 7351 157724",
  phoneRaw: "447351157724",
  mapsUrl: "https://maps.google.com/?q=124-128+City+Road+London+EC1V+2NX",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const teamMembers = [
  { key: "naima", name: "Naima Laktati", initials: "NL" },
  { key: "aziza", name: "Filali Sadiq Aziza", initials: "FA" },
  { key: "soumia", name: "Soumia Allali", initials: "SA" },
  { key: "soumiya", name: "Soumiya El Haddouni", initials: "SE" },
  { key: "anouar", name: "El Mezouari Anouar", initials: "EA" },
  { key: "zineb", name: "Zineb El Yahiaoui", initials: "ZY" },
] as const;

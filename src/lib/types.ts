export type NavLink = {
  label: string;
  href: string;
};

export type Social = {
  type: "Location" | "Facebook" | "Instagram" | "LinkedIn" | "Email" | "Phone";
  href: string;
};

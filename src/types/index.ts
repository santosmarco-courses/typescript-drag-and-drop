export type PersonRole = "Director" | "Manager" | "Assistant" | "Developer";

export type PersonDept = "Financial" | "Sales" | "PD" | "Executive";

export type Person = {
  id: string;
  name: string;
  role: PersonRole;
  dept: PersonDept;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  people: Person[];
  status: "active" | "finished";
};

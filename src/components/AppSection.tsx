import * as React from "react";
import Col from "react-bootstrap/Col";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

type AppSectionProps = {
  title: string;
  backgroundColor?: string;
  projects?: Project[];
};

const AppSection: React.FC<AppSectionProps> = (props) => {
  return (
    <Col className="d-flex flex-column p-3" style={{ height: "100vh" }}>
      <h3 className="text-center border-bottom mb-4">{props.title}</h3>
      <div
        className="flex-1 h-100"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.projects
          ? props.projects.map((p) => <ProjectCard key={p.id} data={p} />)
          : props.children}
      </div>
    </Col>
  );
};

export default AppSection;

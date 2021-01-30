import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import AppSection from "./components/AppSection";
import CreateProjectForm from "./components/CreateProjectForm";
import { ProjectsState } from "./store/reducers/types";
import { RootState } from "./store/types";

const App = () => {
  const allProjects = useSelector<RootState, ProjectsState>(
    (state) => state.projects
  );
  const activeProjects = allProjects.filter((p) => p.status === "active");
  const finishedProjects = allProjects.filter((p) => p.status === "finished");

  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <AppSection title="Create">
          <CreateProjectForm />
        </AppSection>
        <AppSection title="Active" projects={activeProjects} />
        <AppSection title="Finished" projects={finishedProjects} />
      </Row>
    </Container>
  );
};

export default App;
